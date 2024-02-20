import {
  AnimationTriggerMetadata,
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';

export function slideEnterAndOutScreen(): AnimationTriggerMetadata {
  return trigger('slideInOut', [
    transition(':enter', [
      style({opacity: 0, transform: 'translateX(-10%)'}),
      animate(
        '300ms ease-in-out',
        style({opacity: 1, transform: 'translateX(0)'})
      ),
    ]),
    transition(':leave', [
      style({opacity: 1, transform: 'translateX(0)'}),
      animate(
        '300ms ease-in-out',
        style({opacity: 0, transform: 'translateX(-10%)'})
      ),
    ]),
  ]);
}

/** 左側平移進入 */
export function slideEnter(): AnimationTriggerMetadata {
  return trigger('slideIn', [
    transition(':enter', [
      style({opacity: 0, transform: 'translateX(-10%)'}),
      animate(
        '300ms ease-in-out',
        style({opacity: 1, transform: 'translateX(0)'})
      ),
    ]),
  ]);
}

/** 淡入淡出
 * @param OccurDelay 動畫發生前延遲(ms)
 */
export function fadeEnterAndHideOut(
  OccurDelay?: number
): AnimationTriggerMetadata {
  return trigger('fadeInOut', [
    transition(':enter', [
      style({opacity: 0}),
      animate('300ms ease-in-out', style({opacity: 1})),
    ]),
    transition(':leave', [
      style({opacity: 1}),
      animate('0ms', style({opacity: 0})),
    ]),
  ]);
}

/** 淡入+左側平移進入置中&淡出+右側平移移出
 */
export function fadeSlideInAndHideSlideOut(): AnimationTriggerMetadata {
  return trigger('fadeSlideInOut', [
    transition(':enter', [
      style({opacity: 0, transform: 'translate(-53%, -50%)'}),
      animate(
        '300ms ease-in-out',
        style({opacity: 1, transform: 'translate(-50%, -50%)'})
      ),
    ]),
    transition(':leave', [
      style({opacity: 1, transform: 'translate(-50%, -50%)'}),
      animate('0ms', style({opacity: 0, transform: 'translate(-53%, -50%)'})),
    ]),
  ]);
}

/** 卡片
 * 下往上淡入+壓縮淡出
 * @param OccurDelay 動畫發生前延遲(ms)
 */
export function upFadeInAndCompressOut(): AnimationTriggerMetadata {
  return trigger('upInCompressOut', [
    transition(':enter', [
      style({opacity: 0, transform: 'translate(0%, 10%)'}),
      animate(
        '300ms ease-in-out',
        style({opacity: 1, transform: 'translate(0, 0)'})
      ),
    ]),
    transition(':leave', [
      style({opacity: 1, transform: 'scale(100%, 100%)'}),
      animate('0ms', style({opacity: 0, transform: 'scale(90%, 100%)'})),
    ]),
  ]);
}

/** 卡片
 * 上往下淡入+壓縮淡出
 * @param OccurDelay 動畫發生前延遲(ms)
 */
export function downFadeInAndCompressOut(): AnimationTriggerMetadata {
  return trigger('downInCompressOut', [
    transition(':enter', [
      style({opacity: 0, transform: 'translate(0%, -10%)'}),
      animate(
        '300ms ease-in-out',
        style({opacity: 1, transform: 'translate(0, 0)'})
      ),
    ]),
    transition(':leave', [
      style({opacity: 1, transform: 'scale(100%, 100%)'}),
      animate('0ms', style({opacity: 0, transform: 'scale(90%, 100%)'})),
    ]),
  ]);
}
