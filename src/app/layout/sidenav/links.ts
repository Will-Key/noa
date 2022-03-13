import { SubLink } from "../models/sublink.model"

export const generalSettingLinks: SubLink[] = [
  {
    module: 'PROFILE',
    path: '/dashboard/general-settings/profiles',
    label: 'Profils',
  },
  {
    module: 'USER',
    path: '/dashboard/general-settings/users',
    label: 'Utilisateurs',
  },
]

export const adherentLinks: SubLink[] = [
  {
    module: 'ADHERENT',
    path: '/dashboard/adherent/principal',
    label: 'Principal',
  },
  {
    module: 'ADHERENT',
    path: '/dashboard/adherent/secondary',
    label: 'Sécondaire',
  },
]

// All modules
//   'PROFILE',
//   'SERVICE',
//   'BRANCH',
//   'AGENCY',
//   'USER',
//   'PACKAGE',
//   'ABONNEMENT',
//   'BRANDING',
//   'STATS',
