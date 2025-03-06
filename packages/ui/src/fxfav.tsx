import { SizeType } from './type'
import { FxFavSVGIcon } from './icons/fav-icon'

interface FxFavIconPropsType {
    size?: keyof typeof iconSizeVariants
    className?: string,
    variant?: keyof typeof iconVariants
}

const iconSizeVariants: { [key in SizeType]: number } = {
    sm: 20,
    md: 30,
    lg: 50,
    xl: 80
}

type IconVariantType = 'light' | 'dark' | 'default'

const iconVariants: { [key in IconVariantType]: string } = {
    light: "light",
    dark: "dark",
    default: "default"
}


export function FxFavIcon({
    size,
    className,
    variant
}: FxFavIconPropsType) {
    const iconVariant = variant ? iconVariants[variant] : iconVariants.light
    const sizeVariant = size ? iconSizeVariants[size] : iconSizeVariants.md
    return <>

        {
            variant === iconVariants.light ? <>
                <FxFavSVGIcon width={sizeVariant} height={sizeVariant} color='#ffffff' className='dark:block hidden' />
                <FxFavSVGIcon width={sizeVariant} height={sizeVariant} color='#000000' className='dark:hidden block' />
            </> : <FxFavSVGIcon width={sizeVariant} height={sizeVariant} />
        }
    </>
}

