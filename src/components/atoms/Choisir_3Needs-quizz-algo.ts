import { ProfileKey } from './Choisir_3Needs-quizz-data-profil'

export interface QuizResult {
  key: ProfileKey
  showWarning_debutant: boolean
  showWarning_entretien: boolean
  showWarning_suspension: boolean
}

/**
 * Calcule le profil cible et les avertissements associés en fonction des réponses fournies.
 * Algorithme expert : 3 arbres de décisions asymétriques où CHAQUE arbre peut aboutir aux 13 profils.
 */
export const calculateResult = (
  answers: Record<number, string>,
): QuizResult => {
  const q1 = answers[1]
  const q2 = answers[2]
  const q3 = answers[3]
  const q4 = answers[4]
  const q5 = answers[5]
  const q6 = answers[6]
  const q7 = answers[7]
  const q8 = answers[8]
  const q9 = answers[9]
  const q10 = answers[10]

  let resultKey: ProfileKey = 'P10_indecis'

  // ==========================================
  // ARBRE 1 : LA LOGIQUE FINANCIÈRE (Priorité Budget)
  // L'expert croise d'abord le portefeuille (Q9) avec les usages.
  // Objectif : Satisfaire le besoin avec l'option la moins onéreuse possible.
  // ==========================================
  if (q10 === 'Q10_priorite_budget') {
    if (q9 === 'Q9_budget_serre') {
      // SOUS-ARBRE : Budget Serré (-1500€)
      if (q1 === 'Q1_debutant') {
        resultKey =
          q5 === 'Q5_portage_intensif'
            ? 'P2_1_multimodal_ultraleger'
            : 'P1_debutant_occasion'
      } else if (q5 === 'Q5_portage_intensif') {
        resultKey = 'P2_1_multimodal_ultraleger'
      } else if (q3 === 'Q3_utilitaire') {
        if (q4 === 'Q4_distance_courte') resultKey = 'P3_occasionnel_court'
        // Pour sauver le budget sur moyenne distance, on sacrifie la suspension (P4) au profit d'une classique (P2_2)
        else if (q4 === 'Q4_distance_moyenne')
          resultKey = 'P2_2_multimodal_classique'
        else if (q4 === 'Q4_distance_longue')
          resultKey = 'P5_super_commuter' // On ne peut pas sacrifier l'autonomie
        else resultKey = 'P6_super_commuter_xxl'
      } else if (q3 === 'Q3_loisir') {
        if (q7 === 'Q7_style_offroad')
          resultKey = 'P7_voltigeur' // (Devra être trouvée d'occasion)
        else if (q7 === 'Q7_style_vitesse')
          resultKey = 'P8_pistard' // (Devra être trouvée d'occasion)
        else if (q7 === 'Q7_style_endurance')
          resultKey =
            q4 === 'Q4_distance_tres_longue'
              ? 'P9_2_grand_voyageur'
              : 'P9_1_voyageur'
        else resultKey = 'P10_indecis'
      } else {
        // Polyvalent
        resultKey =
          q4 === 'Q4_distance_moyenne'
            ? 'P2_2_multimodal_classique'
            : 'P10_indecis'
      }
    } else if (q9 === 'Q9_budget_moyen') {
      // SOUS-ARBRE : Budget Moyen (1500-3000€)
      if (q5 === 'Q5_portage_intensif') {
        resultKey = 'P2_1_multimodal_ultraleger'
      } else if (q5 === 'Q5_portage_modere') {
        resultKey =
          q8 === 'Q8_suspension_avec'
            ? 'P2_3_multimodal_suspendue'
            : 'P2_2_multimodal_classique'
      } else if (q3 === 'Q3_utilitaire') {
        if (q4 === 'Q4_distance_courte') resultKey = 'P3_occasionnel_court'
        // Le budget permet d'accéder au confort P4 sur du trajet moyen
        else if (q4 === 'Q4_distance_moyenne')
          resultKey = 'P4_commuter_regulier'
        else if (q4 === 'Q4_distance_longue')
          resultKey =
            q2 === 'Q2_gabarit_lourd'
              ? 'P6_super_commuter_xxl'
              : 'P5_super_commuter'
        else resultKey = 'P6_super_commuter_xxl'
      } else if (q3 === 'Q3_loisir') {
        if (q7 === 'Q7_style_offroad') resultKey = 'P7_voltigeur'
        else if (q7 === 'Q7_style_vitesse') resultKey = 'P8_pistard'
        else if (q7 === 'Q7_style_endurance')
          resultKey =
            q4 === 'Q4_distance_tres_longue'
              ? 'P9_2_grand_voyageur'
              : 'P9_1_voyageur'
        else resultKey = 'P10_indecis'
      } else {
        // Polyvalent
        resultKey = 'P10_indecis'
      }
    } else {
      // SOUS-ARBRE : Budget Premium (+3000€)
      // On priorise le budget mais on a de l'argent : on vise la fiabilité et l'équipement optimal
      if (q1 === 'Q1_debutant') {
        // Un débutant avec un gros budget risque quand même de détruire sa roue, on le prévient
        resultKey = 'P1_debutant_occasion'
      } else if (q5 === 'Q5_portage_intensif') {
        resultKey = 'P2_1_multimodal_ultraleger'
      } else if (q3 === 'Q3_utilitaire') {
        // Le luxe permet du matériel premium même pour de courtes distances
        if (q4 === 'Q4_distance_courte') resultKey = 'P2_3_multimodal_suspendue'
        else if (q4 === 'Q4_distance_moyenne')
          resultKey = 'P4_commuter_regulier'
        else if (q4 === 'Q4_distance_longue') resultKey = 'P5_super_commuter'
        else resultKey = 'P6_super_commuter_xxl'
      } else if (q3 === 'Q3_loisir') {
        if (q7 === 'Q7_style_offroad') resultKey = 'P7_voltigeur'
        else if (q7 === 'Q7_style_vitesse') resultKey = 'P8_pistard'
        // Premium + Endurance = Grand voyageur par défaut
        else if (q7 === 'Q7_style_endurance') resultKey = 'P9_2_grand_voyageur'
        else resultKey = 'P9_1_voyageur'
      } else {
        resultKey = 'P10_indecis'
      }
    }
  }

  // ==========================================
  // ARBRE 2 : LA LOGIQUE LOGISTIQUE (Priorité Poids)
  // L'expert croise le portage (Q5) et le gabarit (Q2) avant le reste.
  // Objectif : Maintenir le diamètre et la batterie les plus faibles possibles face au besoin.
  // ==========================================
  else if (q10 === 'Q10_priorite_poids') {
    if (q5 === 'Q5_portage_intensif') {
      resultKey = 'P2_1_multimodal_ultraleger'
    } else if (q5 === 'Q5_portage_modere') {
      // Sur du loisir offroad, on veut une machine agile et légère type P7
      if (q3 === 'Q3_loisir' && q7 === 'Q7_style_offroad') {
        resultKey = 'P7_voltigeur'
      } else {
        resultKey =
          q8 === 'Q8_suspension_avec'
            ? 'P2_3_multimodal_suspendue'
            : 'P2_2_multimodal_classique'
      }
    } else {
      // Portage Rare, mais le poids reste la priorité (Recherche d'agilité ou refus des gros gabarits)
      if (q3 === 'Q3_utilitaire') {
        if (q4 === 'Q4_distance_courte') resultKey = 'P3_occasionnel_court'
        // On évite les grosses suspensions si on veut du léger, sauf demande expresse
        else if (q4 === 'Q4_distance_moyenne')
          resultKey =
            q8 === 'Q8_suspension_sans'
              ? 'P3_occasionnel_court'
              : 'P4_commuter_regulier'
        else if (q4 === 'Q4_distance_longue')
          resultKey = 'P5_super_commuter' // Plus léger qu'une XXL
        else resultKey = 'P6_super_commuter_xxl' // Pas le choix pour faire 60km+
      } else if (q3 === 'Q3_loisir') {
        if (q7 === 'Q7_style_offroad') resultKey = 'P7_voltigeur'
        else if (q7 === 'Q7_style_vitesse') resultKey = 'P8_pistard'
        else if (q7 === 'Q7_style_endurance') {
          // On évite P9_2 (souvent 40kg+) sauf si la distance l'exige absolument
          resultKey =
            q4 === 'Q4_distance_tres_longue'
              ? 'P9_2_grand_voyageur'
              : 'P9_1_voyageur'
        } else {
          resultKey =
            q1 === 'Q1_debutant' ? 'P1_debutant_occasion' : 'P10_indecis'
        }
      } else {
        // Polyvalent
        if (q1 === 'Q1_debutant' && q9 === 'Q9_budget_serre')
          resultKey = 'P1_debutant_occasion'
        else if (q4 === 'Q4_distance_courte' || q4 === 'Q4_distance_moyenne')
          resultKey = 'P4_commuter_regulier' // Très agile
        else resultKey = 'P10_indecis'
      }
    }
  }

  // ==========================================
  // ARBRE 3 : LA LOGIQUE PLAISIR (Priorité Usage / "No Compromise")
  // L'expert ignore le prix et le poids. Seuls le confort, le terrain et la distance dictent la machine.
  // ==========================================
  else {
    if (q3 === 'Q3_loisir') {
      if (q7 === 'Q7_style_offroad' || q6 === 'Q6_terrain_offroad') {
        resultKey = 'P7_voltigeur' // Le roi des franchissements
      } else if (q7 === 'Q7_style_vitesse') {
        resultKey = 'P8_pistard' // Le roi de l'asphalte
      } else if (q7 === 'Q7_style_endurance') {
        if (q4 === 'Q4_distance_tres_longue') {
          resultKey = 'P9_2_grand_voyageur'
        } else {
          // Si le gabarit est lourd, il faut une très grosse machine même pour de la "simple" endurance
          resultKey =
            q2 === 'Q2_gabarit_lourd' ? 'P9_2_grand_voyageur' : 'P9_1_voyageur'
        }
      } else {
        // Style Découverte
        if (q1 === 'Q1_debutant') resultKey = 'P1_debutant_occasion'
        else if (q4 === 'Q4_distance_courte') resultKey = 'P3_occasionnel_court'
        else resultKey = 'P10_indecis'
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
        if (q8 === 'Q8_suspension_avec') {
          resultKey = 'P4_commuter_regulier'
        } else {
          resultKey =
            q5 === 'Q5_portage_modere'
              ? 'P2_2_multimodal_classique'
              : 'P3_occasionnel_court'
        }
      } else {
        // Distance courte
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
      // Polyvalent (Usage de tout, partout)
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
          q8 === 'Q8_suspension_avec' ? 'P4_commuter_regulier' : 'P10_indecis'
      } else if (q1 === 'Q1_debutant' && q9 === 'Q9_budget_serre') {
        resultKey = 'P1_debutant_occasion'
      } else {
        resultKey = 'P10_indecis'
      }
    }
  }

  // ==========================================
  // CALCUL DES AVERTISSEMENTS
  // ==========================================
  return {
    key: resultKey,
    // Warning pour les débutants envoyés sur des machines puissantes/coûteuses
    showWarning_debutant:
      q1 === 'Q1_debutant' &&
      ![
        'P1_debutant_occasion',
        'P2_1_multimodal_ultraleger',
        'P3_occasionnel_court',
        'P10_indecis',
      ].includes(resultKey),

    // Warning d'entretien pour les profils mécaniquement complexes
    showWarning_entretien: [
      'P5_super_commuter',
      'P6_super_commuter_xxl',
      'P7_voltigeur',
      'P8_pistard',
      'P9_1_voyageur',
      'P9_2_grand_voyageur',
    ].includes(resultKey),

    // Warning suspension pour expliciter le surpoids et surcoût qu'implique ce choix
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
