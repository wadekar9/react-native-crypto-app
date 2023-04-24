import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ChartFocusedIcon = (props) => (
    <Svg
        width={22}
        height={21}
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M21.7708 18.5282H2.0625V1.00011C2.0625 0.876514 1.95938 0.775391 1.83333 0.775391H0.229167C0.103125 0.775391 0 0.876514 0 1.00011V20.326C0 20.4495 0.103125 20.5507 0.229167 20.5507H21.7708C21.8969 20.5507 22 20.4495 22 20.326V18.7529C22 18.6293 21.8969 18.5282 21.7708 18.5282ZM5.09323 14.1939C5.18203 14.281 5.32526 14.281 5.41693 14.1939L9.37864 10.3288L13.0339 13.9355C13.1227 14.0226 13.2687 14.0226 13.3576 13.9355L21.2466 6.20236C21.3354 6.11528 21.3354 5.97202 21.2466 5.88494L20.1122 4.77258C20.0692 4.73076 20.011 4.7073 19.9504 4.7073C19.8898 4.7073 19.8316 4.73076 19.7885 4.77258L13.2 11.2304L9.55052 7.62932C9.50745 7.5875 9.44929 7.56404 9.38867 7.56404C9.32806 7.56404 9.26989 7.5875 9.22682 7.62932L3.96172 12.7613C3.91907 12.8036 3.89515 12.8606 3.89515 12.9201C3.89515 12.9795 3.91907 13.0365 3.96172 13.0788L5.09323 14.1939Z"
            fill="#0063F5"
        />
    </Svg>
);

export default ChartFocusedIcon;