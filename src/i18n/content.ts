// Centralized content loader
import { homePageContent as homeEN, teamPageContent as teamEN, contactPageContent as contactEN, teamMembers as teamMembersEN } from '../data/en';
import { homePageContent as homeFR, teamPageContent as teamFR, contactPageContent as contactFR, teamMembers as teamMembersFR } from '../data/fr';

export const content = {
  en: {
    home: homeEN,
    team: teamEN,
    contact: contactEN,
    teamMembers: teamMembersEN,
  },
  fr: {
    home: homeFR,
    team: teamFR,
    contact: contactFR,
    teamMembers: teamMembersFR,
  },
} as const;

export type Lang = keyof typeof content;

export function getContent(lang: Lang) {
  return content[lang] || content.en;
}
