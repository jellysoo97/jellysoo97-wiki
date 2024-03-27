import { ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// TODO:
// https://github.com/dcastil/tailwind-merge/issues/276
// https://dev.classmethod.jp/articles/tailwind-css-feat-tailwind-merge/
// https://github.com/dcastil/tailwind-merge/blob/main/docs/api-reference.md#extendtailwindmerge
// issue: 커스텀 유틸리티 클래스 twMerge() 시 class가 override 됨
// cn('text-secondary text-size-small') -> only text-size-small applied
// 원인: tailwind-merge doesn't have access to the tailwind.config.js file and you need to configure it separately
// tailwind-merge는 tailwind config에 접근하지 못하기 때문에 twMerge config에 따로 설정해줘야 한다.
// https://github.com/dcastil/tailwind-merge/blob/v1.13.1/docs/recipes.md#extracting-classes-with-tailwinds-apply
// This means: If someone adds another Tailwind class to the @apply directive, the tailwind-merge config would need to get modified accordignly, keeping it in sync with the written CSS. This easy-to-miss dependency is fragile and can lead to bugs with incorrect merging behavior.
// 그치만 tailwind config와 싱크를 맞춰서 매번 설정하는 건 귀찮고 놓칠 가능성이 있으니 string variable in js로 관리하는 걸 공식에선 추천

export const cn = (...inputs: ClassValue[]) => {
  const customTwMerge = extendTailwindMerge({
    extend: {
      classGroups: {
        // 'font-size': [{ 'text-size': ['small', 'base', 'large'] }],
        'font-size': ['text-size-small', 'text-size-base', 'text-size-large'],
        'text-color': ['text-primary', 'text-secondary'],
      },
    },
  })

  return customTwMerge(clsx(inputs))
}
