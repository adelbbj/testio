import BaseIcon from "@/app/_components/icons/base-icon";
import { SvgIconType } from "../icon.types";

export default function SvgIcon(props: SvgIconType) {
  return (
    <BaseIcon {...props}>
      <g mask="url(#mask0_11_225)">
        <path d="M4.8718 13.6667C4.53932 13.6667 4.25535 13.549 4.01988 13.3135C3.78441 13.078 3.66667 12.7941 3.66667 12.4616V4.00006H3V3.00007H5.99998V2.41034H9.99998V3.00007H13V4.00006H12.3333V12.4616C12.3333 12.7983 12.2166 13.0834 11.9833 13.3167C11.75 13.55 11.4649 13.6667 11.1282 13.6667H4.8718ZM11.3333 4.00006H4.66665V12.4616C4.66665 12.5214 4.68588 12.5706 4.72435 12.609C4.76282 12.6475 4.81197 12.6667 4.8718 12.6667H11.1282C11.1795 12.6667 11.2265 12.6454 11.2692 12.6026C11.3119 12.5599 11.3333 12.5129 11.3333 12.4616V4.00006ZM6.26923 11.3334H7.26922V5.33339H6.26923V11.3334ZM8.73075 11.3334H9.73073V5.33339H8.73075V11.3334Z" />
      </g>
    </BaseIcon>
  );
}
