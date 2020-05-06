import styled from "styled-components";

// 의미있는 이미지의 대체 텍스트를 제공하는 경우
export const PM = styled.span`
  display: block; overflow: hidden; font-size: 0; line-height: 0; text-indent: -9999px;
`
//의미있는 이미지의 대체 텍스트로 이미지가 없어도 대체 텍스트를 보여주고자 할 때
export const WA = styled.span`
  display: block; overflow: hidden; position:relative; z-index: -1; width:100%; height:100%;
`
// 대체 텍스트가 아닌 접근성을 위한 숨김 텍스트를 제공할 때
export const SU = styled.span`
  overflow: hidden; position:absolute; width: 0; height: 0; line-height: 0; text-indent: -9999px;
`


