/*
 * @Author: liangzai450@sina.com
 * @Date: 2024-09-05 09:44:56
 * @Description:
 * @FilePath: \\mogai-docus-kuizuo-v1\\src\\theme\\DocCardList\\index.tsx
 * @LastEditors: liangzai450@sina.com
 * @LastEditTime: 2024-09-05 12:40:31
 * ==============================================
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */

import type { WrapperProps } from '@docusaurus/types';
import DocCardList from '@theme-original/DocCardList';
import type DocCardListType from '@theme/DocCardList';

type Props = WrapperProps<typeof DocCardListType>;

export default function DocCardListWrapper(props: Props): JSX.Element {
  return (
    <>
      <DocCardList {...props} />
    </>
  );
}
