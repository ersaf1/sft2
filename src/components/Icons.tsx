// Icons powered by phosphor-react (install dependency and run the dev server to load types)
import {
  Users as PhUsers,
  Trophy as PhTrophy,
  Lightning as PhLightning,
  Globe as PhGlobe,
  DeviceMobile as PhDeviceMobile,
  GameController as PhGameController,
  Database as PhDatabase,
  Palette as PhPalette,
  Gear as PhGear,
  MagnifyingGlass as PhMagnifyingGlass,
  Camera as PhCamera,
  InstagramLogo as PhInstagramLogo,
} from 'phosphor-react'

type IconProps = {
  size?: number
  className?: string
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
}

const make = (Comp: any) => ({ size = 32, className = '', weight = 'bold', ...props }: IconProps) => (
  <Comp size={size} className={className} weight={weight} {...props} />
)

export const Users = make(PhUsers)
export const Trophy = make(PhTrophy)
export const Bolt = make(PhLightning)
export const Globe = make(PhGlobe)
export const Mobile = make(PhDeviceMobile)
export const Gamepad = make(PhGameController)
export const Database = make(PhDatabase)
export const Palette = make(PhPalette)
export const Cog = make(PhGear)
export const MagnifyingGlass = make(PhMagnifyingGlass)
export const Camera = make(PhCamera)
export const Instagram = make(PhInstagramLogo)

export default {
  Users,
  Trophy,
  Bolt,
  Globe,
  Mobile,
  Gamepad,
  Database,
  Palette,
  MagnifyingGlass,
  Cog,
  Camera,
  Instagram,
}
