import { ProfileKey } from './Choisir_3Needs-quizz-data-profil'

export interface QuizResult {
  key: ProfileKey
  showWarning_debutant: boolean
  showWarning_entretien: boolean
  showWarning_suspension: boolean
}

/**
 * Algorithme de recommandation de gyroroue par Arbre de Décision.
 * Entonnoir principal : Q10 (Arbitrage des priorités).
 * Traitement préalable des incompatibilités physiques/économiques (Profil P11).
 */
export const calculateResult = (
  answers: Record<number, string>,
): QuizResult => {
  const q1 = answers[1] // Niveau (Q1_debutant, Q1_pratiquant)
  const q2 = answers[2] // Gabarit (Q2_gabarit_standard, Q2_gabarit_lourd)
  const q3 = answers[3] // Usage (Q3_utilitaire, Q3_loisir, Q3_polyvalent)
  const q4 = answers[4] // Distance (Q4_distance_courte, Q4_distance_moyenne, Q4_distance_longue, Q4_distance_tres_longue)
  const q5 = answers[5] // Portage (Q5_portage_intensif, Q5_portage_modere, Q5_portage_rare)
  const q6 = answers[6] // Terrain (Q6_terrain_lisse, Q6_terrain_chaussee, Q6_terrain_offroad)
  const q7 = answers[7] // Style (Q7_style_offroad, Q7_style_vitesse, Q7_style_endurance, Q7_style_decouverte)
  const q8 = answers[8] // Suspension (Q8_suspension_sans, Q8_suspension_avec)
  const q9 = answers[9] // Budget (Q9_budget_serre, Q9_budget_moyen, Q9_budget_premium)
  const q10 = answers[10] // Priorité arbitrage (Q10_priorite_budget, Q10_priorite_poids, Q10_priorite_usage)

  let resultKey: ProfileKey = 'P10_indecis'

  // =========================================================================
  // NIVEAU 0 : FILTRE D'INCOMPATIBILITÉ TECHNIQUE OU ÉCONOMIQUE (P11)
  // Détection des cas physiquement impossibles ou des exigences contradictoires
  // =========================================================================

  // 1. Portage intensif (<15kg) + Très longue distance (+60km) + Gabarit lourd (>=90kg)
  const isPhysicalImpossibility =
    q5 === 'Q5_portage_intensif' &&
    q4 === 'Q4_distance_tres_longue' &&
    q2 === 'Q2_gabarit_lourd'

  // 2. Portage intensif (<15kg) + Pratique extrême (Offroad ou Vitesse demandant des machines de +30kg)
  const isPerformanceWeightConflict =
    q5 === 'Q5_portage_intensif' &&
    (q7 === 'Q7_style_offroad' || q7 === 'Q7_style_vitesse')

  // 3. Petit budget (-1500€) + Priorité Usage (Refus de compromis) + Pratique haut de gamme neuve (+60km, Vitesse, Offroad)
  const isBudgetUsageConflict =
    q9 === 'Q9_budget_serre' &&
    q10 === 'Q10_priorite_usage' &&
    (q4 === 'Q4_distance_tres_longue' ||
      q7 === 'Q7_style_vitesse' ||
      q7 === 'Q7_style_offroad')

  // 4. Incompatibilité globale : Portage intensif + Petit budget + Longues distances régulières
  const isTripleContradiction =
    q5 === 'Q5_portage_intensif' &&
    q9 === 'Q9_budget_serre' &&
    (q4 === 'Q4_distance_longue' || q4 === 'Q4_distance_tres_longue')

  if (
    isPhysicalImpossibility ||
    isPerformanceWeightConflict ||
    isBudgetUsageConflict ||
    isTripleContradiction
  ) {
    resultKey = 'P11_mouton_5_pattes'
  }

  // =========================================================================
  // ARBRE 1 : LOGIQUE FINANCIÈRE (Q10_priorite_budget)
  // Objectif : Maximiser le besoin en imposant un plafond strict sur le prix
  // =========================================================================
  else if (q10 === 'Q10_priorite_budget') {
    if (q9 === 'Q9_budget_serre') {
      // Budget -1500€ (Cible occasion ou entrée de gamme)
      if (q1 === 'Q1_debutant') {
        resultKey =
          q5 === 'Q5_portage_intensif'
            ? 'P2_1_multimodal_ultraleger'
            : 'P1_debutant_occasion'
      } else if (q5 === 'Q5_portage_intensif') {
        resultKey = 'P2_1_multimodal_ultraleger'
      } else if (q3 === 'Q3_loisir') {
        if (q7 === 'Q7_style_offroad' || q6 === 'Q6_terrain_offroad')
          resultKey = 'P7_voltigeur'
        else if (q7 === 'Q7_style_vitesse') resultKey = 'P8_pistard'
        else if (q7 === 'Q7_style_endurance')
          resultKey =
            q4 === 'Q4_distance_tres_longue'
              ? 'P9_2_grand_voyageur'
              : 'P9_1_voyageur'
        else resultKey = 'P3_occasionnel_court'
      } else if (q3 === 'Q3_utilitaire') {
        if (q4 === 'Q4_distance_courte')
          resultKey =
            q5 === 'Q5_portage_modere'
              ? 'P2_2_multimodal_classique'
              : 'P3_occasionnel_court'
        else if (q4 === 'Q4_distance_moyenne')
          resultKey =
            q8 === 'Q8_suspension_avec'
              ? 'P2_3_multimodal_suspendue'
              : 'P2_2_multimodal_classique'
        else if (q4 === 'Q4_distance_longue') resultKey = 'P5_super_commuter'
        else resultKey = 'P6_super_commuter_xxl'
      } else {
        // Polyvalent
        if (q8 === 'Q8_suspension_avec' && q5 === 'Q5_portage_modere')
          resultKey = 'P2_3_multimodal_suspendue'
        else if (q4 === 'Q4_distance_moyenne')
          resultKey = 'P2_2_multimodal_classique'
        else if (
          q4 === 'Q4_distance_longue' ||
          q4 === 'Q4_distance_tres_longue'
        )
          resultKey = 'P5_super_commuter'
        else resultKey = 'P10_indecis'
      }
    } else if (q9 === 'Q9_budget_moyen') {
      // Budget 1500€ - 3000€ (Cœur de marché)
      if (q5 === 'Q5_portage_intensif') {
        resultKey = 'P2_1_multimodal_ultraleger'
      } else if (q1 === 'Q1_debutant' && q7 === 'Q7_style_decouverte') {
        resultKey = 'P1_debutant_occasion'
      } else if (q3 === 'Q3_utilitaire') {
        if (q4 === 'Q4_distance_courte')
          resultKey =
            q8 === 'Q8_suspension_avec'
              ? 'P2_3_multimodal_suspendue'
              : 'P3_occasionnel_court'
        else if (q4 === 'Q4_distance_moyenne')
          resultKey =
            q8 === 'Q8_suspension_sans' && q5 === 'Q5_portage_modere'
              ? 'P2_2_multimodal_classique'
              : 'P4_commuter_regulier'
        else if (q4 === 'Q4_distance_longue')
          resultKey =
            q2 === 'Q2_gabarit_lourd'
              ? 'P6_super_commuter_xxl'
              : 'P5_super_commuter'
        else resultKey = 'P6_super_commuter_xxl'
      } else if (q3 === 'Q3_loisir') {
        if (q7 === 'Q7_style_offroad' || q6 === 'Q6_terrain_offroad')
          resultKey = 'P7_voltigeur'
        else if (q7 === 'Q7_style_vitesse') resultKey = 'P8_pistard'
        else if (q7 === 'Q7_style_endurance')
          resultKey =
            q4 === 'Q4_distance_tres_longue'
              ? 'P9_2_grand_voyageur'
              : 'P9_1_voyageur'
        else resultKey = 'P3_occasionnel_court'
      } else {
        if (q8 === 'Q8_suspension_avec')
          resultKey =
            q5 === 'Q5_portage_modere'
              ? 'P2_3_multimodal_suspendue'
              : 'P4_commuter_regulier'
        else
          resultKey =
            q4 === 'Q4_distance_courte'
              ? 'P3_occasionnel_court'
              : 'P2_2_multimodal_classique'
      }
    } else {
      // Budget Premium (+3000€)
      if (q1 === 'Q1_debutant' && q7 === 'Q7_style_decouverte') {
        resultKey = 'P1_debutant_occasion'
      } else if (q5 === 'Q5_portage_intensif') {
        resultKey = 'P2_1_multimodal_ultraleger'
      } else if (q3 === 'Q3_loisir') {
        if (q7 === 'Q7_style_offroad' || q6 === 'Q6_terrain_offroad')
          resultKey = 'P7_voltigeur'
        else if (q7 === 'Q7_style_vitesse') resultKey = 'P8_pistard'
        else if (q7 === 'Q7_style_endurance') resultKey = 'P9_2_grand_voyageur'
        else resultKey = 'P9_1_voyageur'
      } else if (q3 === 'Q3_utilitaire') {
        if (q4 === 'Q4_distance_courte')
          resultKey =
            q8 === 'Q8_suspension_avec'
              ? 'P2_3_multimodal_suspendue'
              : 'P3_occasionnel_court'
        else if (q4 === 'Q4_distance_moyenne')
          resultKey = 'P4_commuter_regulier'
        else if (q4 === 'Q4_distance_longue') resultKey = 'P5_super_commuter'
        else resultKey = 'P6_super_commuter_xxl'
      } else {
        if (q4 === 'Q4_distance_tres_longue' || q2 === 'Q2_gabarit_lourd')
          resultKey = 'P6_super_commuter_xxl'
        else if (q8 === 'Q8_suspension_avec') resultKey = 'P4_commuter_regulier'
        else resultKey = 'P2_2_multimodal_classique'
      }
    }
  }

  // =========================================================================
  // ARBRE 2 : LOGIQUE LOGISTIQUE / POIDS (Q10_priorite_poids)
  // Objectif : Minimiser le poids et l'encombrement face aux contraintes de portage
  // =========================================================================
  else if (q10 === 'Q10_priorite_poids') {
    if (q5 === 'Q5_portage_intensif') {
      if (q1 === 'Q1_debutant' && q9 === 'Q9_budget_serre')
        resultKey = 'P1_debutant_occasion'
      else resultKey = 'P2_1_multimodal_ultraleger'
    } else if (q5 === 'Q5_portage_modere') {
      if (q8 === 'Q8_suspension_avec') {
        resultKey =
          q3 === 'Q3_loisir' && q7 === 'Q7_style_offroad'
            ? 'P7_voltigeur'
            : 'P2_3_multimodal_suspendue'
      } else if (q3 === 'Q3_loisir') {
        if (q7 === 'Q7_style_vitesse') resultKey = 'P8_pistard'
        else if (q7 === 'Q7_style_endurance') resultKey = 'P9_1_voyageur'
        else resultKey = 'P2_2_multimodal_classique'
      } else if (q4 === 'Q4_distance_courte') {
        resultKey = 'P3_occasionnel_court'
      } else {
        resultKey = 'P2_2_multimodal_classique'
      }
    } else {
      // Portage rare (Maniabilité et compacité recherchées)
      if (q1 === 'Q1_debutant' && q9 === 'Q9_budget_serre') {
        resultKey = 'P1_debutant_occasion'
      } else if (q3 === 'Q3_utilitaire') {
        if (q4 === 'Q4_distance_courte') resultKey = 'P3_occasionnel_court'
        else if (q4 === 'Q4_distance_moyenne')
          resultKey =
            q8 === 'Q8_suspension_sans'
              ? 'P2_2_multimodal_classique'
              : 'P4_commuter_regulier'
        else if (q4 === 'Q4_distance_longue') resultKey = 'P5_super_commuter'
        else resultKey = 'P6_super_commuter_xxl'
      } else if (q3 === 'Q3_loisir') {
        if (q7 === 'Q7_style_offroad' || q6 === 'Q6_terrain_offroad')
          resultKey = 'P7_voltigeur'
        else if (q7 === 'Q7_style_vitesse') resultKey = 'P8_pistard'
        else if (q7 === 'Q7_style_endurance')
          resultKey =
            q4 === 'Q4_distance_tres_longue'
              ? 'P9_2_grand_voyageur'
              : 'P9_1_voyageur'
        else resultKey = 'P3_occasionnel_court'
      } else {
        if (q4 === 'Q4_distance_courte') resultKey = 'P3_occasionnel_court'
        else if (q4 === 'Q4_distance_moyenne')
          resultKey = 'P4_commuter_regulier'
        else if (q4 === 'Q4_distance_longue') resultKey = 'P5_super_commuter'
        else if (q4 === 'Q4_distance_tres_longue')
          resultKey = 'P9_2_grand_voyageur'
        else resultKey = 'P10_indecis'
      }
    }
  }

  // =========================================================================
  // ARBRE 3 : LOGIQUE USAGE / PERFORMANCE (Q10_priorite_usage)
  // Objectif : Recommander la machine idéale selon le besoin applicatif pur
  // =========================================================================
  else {
    if (q3 === 'Q3_loisir') {
      if (q7 === 'Q7_style_offroad' || q6 === 'Q6_terrain_offroad') {
        resultKey = 'P7_voltigeur'
      } else if (q7 === 'Q7_style_vitesse') {
        resultKey = 'P8_pistard'
      } else if (q7 === 'Q7_style_endurance') {
        resultKey =
          q4 === 'Q4_distance_tres_longue' || q2 === 'Q2_gabarit_lourd'
            ? 'P9_2_grand_voyageur'
            : 'P9_1_voyageur'
      } else {
        if (q1 === 'Q1_debutant') resultKey = 'P1_debutant_occasion'
        else if (q5 === 'Q5_portage_intensif')
          resultKey = 'P2_1_multimodal_ultraleger'
        else resultKey = 'P3_occasionnel_court'
      }
    } else if (q3 === 'Q3_utilitaire') {
      if (q4 === 'Q4_distance_tres_longue') {
        resultKey = 'P6_super_commuter_xxl'
      } else if (q4 === 'Q4_distance_longue') {
        resultKey =
          q2 === 'Q2_gabarit_lourd'
            ? 'P6_super_commuter_xxl'
            : 'P5_super_commuter'
      } else if (q4 === 'Q4_distance_moyenne') {
        if (q8 === 'Q8_suspension_avec') resultKey = 'P4_commuter_regulier'
        else
          resultKey =
            q5 === 'Q5_portage_modere'
              ? 'P2_2_multimodal_classique'
              : 'P3_occasionnel_court'
      } else {
        if (q5 === 'Q5_portage_intensif')
          resultKey = 'P2_1_multimodal_ultraleger'
        else if (q5 === 'Q5_portage_modere')
          resultKey =
            q8 === 'Q8_suspension_avec'
              ? 'P2_3_multimodal_suspendue'
              : 'P2_2_multimodal_classique'
        else resultKey = 'P3_occasionnel_court'
      }
    } else {
      // Polyvalent
      if (q6 === 'Q6_terrain_offroad') {
        resultKey = 'P7_voltigeur'
      } else if (q4 === 'Q4_distance_tres_longue') {
        resultKey = 'P9_2_grand_voyageur'
      } else if (q4 === 'Q4_distance_longue') {
        resultKey = 'P5_super_commuter'
      } else if (q5 === 'Q5_portage_intensif') {
        resultKey = 'P2_1_multimodal_ultraleger'
      } else if (q4 === 'Q4_distance_moyenne') {
        resultKey =
          q8 === 'Q8_suspension_avec'
            ? 'P4_commuter_regulier'
            : 'P2_2_multimodal_classique'
      } else if (q1 === 'Q1_debutant' && q9 === 'Q9_budget_serre') {
        resultKey = 'P1_debutant_occasion'
      } else {
        resultKey =
          q8 === 'Q8_suspension_avec'
            ? 'P2_3_multimodal_suspendue'
            : 'P10_indecis'
      }
    }
  }

  // =========================================================================
  // CALCUL DES AVERTISSEMENTS POUR L'INTERFACE UTILISATEUR
  // =========================================================================
  return {
    key: resultKey,

    // Avertissement si un débutant est orienté vers une machine puissante/lourde
    showWarning_debutant:
      q1 === 'Q1_debutant' &&
      ![
        'P1_debutant_occasion',
        'P2_1_multimodal_ultraleger',
        'P3_occasionnel_court',
        'P10_indecis',
        'P11_mouton_5_pattes',
      ].includes(resultKey),

    // Avertissement sur la complexité d'entretien des modèles hautes performances
    showWarning_entretien: [
      'P5_super_commuter',
      'P6_super_commuter_xxl',
      'P7_voltigeur',
      'P8_pistard',
      'P9_1_voyageur',
      'P9_2_grand_voyageur',
    ].includes(resultKey),

    // Avertissement sur la prise de poids/coût liée aux suspensions
    showWarning_suspension: [
      'P2_3_multimodal_suspendue',
      'P4_commuter_regulier',
      'P5_super_commuter',
      'P6_super_commuter_xxl',
      'P7_voltigeur',
      'P8_pistard',
      'P9_1_voyageur',
      'P9_2_grand_voyageur',
    ].includes(resultKey),
  }
}
