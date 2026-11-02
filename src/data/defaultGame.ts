/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  GameArenaConfig,
  Question,
  Team,
} from '../types/game';
import { importedQuestionsFromJSON } from './importedQuestions';

/**
 * 4 DISTINCT TEAMS FOR THE VULTURE CYPRUS ARENA:
 * "Στο χείλος της εξαφάνισης - οι Γύπες στην Κύπρο"
 * Mapped to the educational report:
 * ekpaideytiki-anafora-gypes-2026-10-29_1818ef45.json
 */
export const defaultTeams: Team[] = [
  {
    id: 'team-characteristics',
    number: 1,
    title: 'Γενικά Χαρακτηριστικά',
    titleEn: 'General Characteristics',
    avatar: '🦅',
    color: '#D97706', // Amber 600
    secondaryColor: '#F59E0B',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-800',
    accentBorder: 'border-amber-500',
    slogan: '«Οι Γίγαντες των Αιθέρων: Μορφολογία, Οξύτατη Όραση & Ανατομικές Προσαρμογές»',
    description:
      'Εξειδίκευση στη σωματική διάπλαση, το άνοιγμα πτερύγων (~2.5μ), το βάρος (6-11 κιλά), το γυμνό λαιμό, τα αδύναμα πέλματα για περπάτημα και τη μακροβιότητα (20-30+ έτη).',
    iconName: 'Feather',
    themeCategory: 'Μορφολογία & Βιολογία',
  },
  {
    id: 'team-habitat-flight',
    number: 2,
    title: 'Περιβάλλον, Φωλεοποίηση & Πτήση',
    titleEn: 'Environment, Nesting & Flight',
    avatar: '🪨',
    color: '#0284C7', // Sky 600
    secondaryColor: '#38BDF8',
    badgeColor: 'bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800',
    accentBorder: 'border-sky-500',
    slogan: '«Κυρίαρχοι των Θερμών Ρευμάτων & των Απόκρημνων Βράχων»',
    description:
      'Εξειδίκευση στα ενδιαιτήματα της Κύπρου (Γκρεμοί Επισκοπής, κοιλάδες Ξερού και Διαρίζου), στις αποικίες σε ορθοπλαγιές, στο 1 αυγό ετησίως και στη θερμική ανεμοπορία σε υψόμετρο 2.000 - 6.000μ.',
    iconName: 'Wind',
    themeCategory: 'Οικολογία & Πτήση',
  },
  {
    id: 'team-diet-habits',
    number: 3,
    title: 'Διατροφή, Συνήθειες & Αξίες',
    titleEn: 'Diet, Habits & Values',
    avatar: '🌿',
    color: '#059669', // Emerald 600
    secondaryColor: '#10B981',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800',
    accentBorder: 'border-emerald-500',
    slogan: '«Οι Καθαριστές της Φύσης: Ασπίδα Υγείας & Οικοσυστημική Ισορροπία»',
    description:
      'Εξειδίκευση στην αποκλειστική πτωματοφαγία (χωρίς επιθέσεις σε ζωντανά ζώα), στο εξαιρετικά όξινο γαστρικό υγρό (pH ~1.0) που εξουδετερώνει άνθρακα και αλλαντίαση, και στη συμπεριφορά ουροκένωσης.',
    iconName: 'ShieldCheck',
    themeCategory: 'Διατροφή & Υγειονομική Αξία',
  },
  {
    id: 'team-threats-protection',
    number: 4,
    title: 'Απειλές & Προστασία',
    titleEn: 'Threats & Protection',
    avatar: '🛡️',
    color: '#E11D48', // Rose 600
    secondaryColor: '#F43F5E',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-300 dark:bg-rose-950/40 dark:text-rose-200 dark:border-rose-800',
    accentBorder: 'border-rose-500',
    slogan: '«Επιχείρηση Διάσωση: Σκύλοι Ανίχνευσης, Δορυφόροι & Ζωή με τους Γύπες»',
    description:
      'Εξειδίκευση στην καταπολέμηση της #1 απειλής (δηλητηριασμένα δολώματα), στους σκύλους ανίχνευσης K9, στους δορυφορικούς πομπούς GPS, στις 4 περιφραγμένες ταΐστρες και στην ενίσχυση από Ισπανία.',
    iconName: 'AlertTriangle',
    themeCategory: 'Διατήρηση & Μέτρα Σωτηρίας',
  },
];

/**
 * 75 QUESTIONS FULLY MAPPED FROM:
 * ekpaideytiki-anafora-gypes-2026-10-29_1818ef45.json
 */
export const defaultQuestions: Question[] = importedQuestionsFromJSON;

/**
 * DEFAULT GAME ARENA CONFIGURATION OBJECT
 */
export const defaultGameArena: GameArenaConfig = {
  id: 'vulture-cyprus-arena-2026',
  title: 'Στο χείλος της εξαφάνισης - οι Γύπες στην Κύπρο',
  titleEn: 'On the Brink of Extinction - Vultures in Cyprus',
  subtitle: 'Διαδραστική Εκπαιδευτική Αρένα Γνώσεων & Πεδίου',
  version: '2026.2',
  datasetSource: 'ekpaideytiki-anafora-gypes-2026-10-29_1818ef45.json',
  academicReviewDate: '2026-10-29',
  regionsCovered: ['Κύπρος (Γκρεμοί Επισκοπής, Κοιλάδα Ξερού, Κοιλάδα Διαρίζου, Παραμάλι, Τρόοδος)'],
  teams: defaultTeams,
  questions: defaultQuestions,
};

// ==========================================
// UTILITY & QUERY FUNCTIONS
// ==========================================

export function getQuestionsByTeam(teamId: string, activeOnly: boolean = false): Question[] {
  return defaultQuestions.filter(q => {
    const matchesTeam = q.assignedTeamIds.includes(teamId);
    return activeOnly ? matchesTeam && q.isActive : matchesTeam;
  });
}

export function getQuestionsByType(type: Question['type'], activeOnly: boolean = false): Question[] {
  return defaultQuestions.filter(q => {
    const matchesType = q.type === type;
    return activeOnly ? matchesType && q.isActive : matchesType;
  });
}

export function getActiveQuestionPool(): Question[] {
  return defaultQuestions.filter(q => q.isActive);
}

export function calculateTotalPoints(teamId?: string): number {
  const pool = teamId ? getQuestionsByTeam(teamId, true) : getActiveQuestionPool();
  return pool.reduce((acc, q) => acc + q.points, 0);
}

export function getTeamById(teamId: string): Team | undefined {
  return defaultTeams.find(t => t.id === teamId);
}
