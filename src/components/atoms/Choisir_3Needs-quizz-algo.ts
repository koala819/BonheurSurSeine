import { ProfileKey } from './Choisir_3Needs-quizz-data-profil'

export interface QuizResult {
  key: ProfileKey
  showWarning_debutant: boolean
  showWarning_entretien: boolean
  showWarning_suspension: boolean
}

/**
 * Calcule le profil cible et les avertissements associés en fonction des réponses fournies.
 * @param answers Record associant l'ID de la question à la valeur de la réponse sélectionnée.
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
  // FILTRE ENTONNOIR 1 : LE BUDGET EST ROI
  // ==========================================
  if (q10 === 'Q10_priorite_budget') {
    if (q9 === 'Q9_budget_serre' && q5 !== 'Q5_portage_intensif') {
      resultKey = 'P1_debutant_occasion'
    } else if (q5 === 'Q5_portage_intensif') {
      resultKey = 'P2_1_multimodal_ultraleger'
    } else if (q5 === 'Q5_portage_modere') {
      resultKey =
        q8 === 'Q8_suspension_avec'
          ? 'P2_3_multimodal_suspendue'
          : 'P2_2_multimodal_classique'
    }
  }

  // ==========================================
  // FILTRE ENTONNOIR 2 : LE POIDS EST ROI
  // ==========================================
  if (
    resultKey === 'P10_indecis' &&
    (q10 === 'Q10_priorite_poids' || q5 === 'Q5_portage_intensif')
  ) {
    if (q5 === 'Q5_portage_intensif') {
      resultKey = 'P2_1_multimodal_ultraleger'
    } else if (q5 === 'Q5_portage_modere') {
      resultKey =
        q8 === 'Q8_suspension_avec'
          ? 'P2_3_multimodal_suspendue'
          : 'P2_2_multimodal_classique'
    }
  }

  // ==========================================
  // FILTRE ENTONNOIR 3 : L'USAGE/PLAISIR EST ROI (Tronc commun)
  // ==========================================
  if (resultKey === 'P10_indecis') {
    // --- BRANCHE A : USAGE UTILITAIRE ---
    if (q3 === 'Q3_utilitaire') {
      if (q4 === 'Q4_distance_courte' || q4 === 'Q4_distance_moyenne') {
        resultKey = 'P4_commuter_regulier'
      } else if (
        q4 === 'Q4_distance_longue' ||
        q4 === 'Q4_distance_tres_longue'
      ) {
        resultKey =
          q2 === 'Q2_gabarit_lourd'
            ? 'P6_super_commuter_xxl'
            : 'P5_super_commuter'
      }
    }
    // --- BRANCHE B : USAGE LOISIR ---
    else if (q3 === 'Q3_loisir') {
      if (q4 === 'Q4_distance_courte') {
        resultKey = 'P3_occasionnel_court'
      } else if (q7 === 'Q7_style_offroad' || q6 === 'Q6_terrain_offroad') {
        resultKey = 'P7_voltigeur'
      } else if (q7 === 'Q7_style_vitesse') {
        resultKey = 'P8_pistard'
      } else if (q7 === 'Q7_style_endurance') {
        resultKey =
          q4 === 'Q4_distance_tres_longue'
            ? 'P9_2_grand_voyageur'
            : 'P9_1_voyageur'
      }
    }
    // --- BRANCHE C : USAGE POLYVALENT OU STYLE DÉCOUVERTE ---
    else if (q3 === 'Q3_polyvalent' || q7 === 'Q7_style_decouverte') {
      if (q4 === 'Q4_distance_longue' || q4 === 'Q4_distance_tres_longue') {
        resultKey = 'P5_super_commuter'
      } else {
        resultKey = 'P10_indecis'
      }
    }
  }

  // --- CHUTE DE SÉCURITÉ ---
  if (resultKey === 'P10_indecis' && q9 === 'Q9_budget_serre') {
    resultKey = 'P1_debutant_occasion'
  }

  return {
    key: resultKey,
    showWarning_debutant:
      q1 === 'Q1_debutant' && resultKey !== 'P1_debutant_occasion',
    showWarning_entretien: [
      'P5_super_commuter',
      'P6_super_commuter_xxl',
      'P7_voltigeur',
      'P8_pistard',
      'P9_1_voyageur',
      'P9_2_grand_voyageur',
    ].includes(resultKey),
    showWarning_suspension: [
      'P2_3_multimodal_suspendue',
      'P4_commuter_regulier',
      'P5_super_commuter',
      'P6_super_commuter_xxl',
      'P7_voltigeur',
      'P9_1_voyageur',
      'P9_2_grand_voyageur',
    ].includes(resultKey),
  }
}
