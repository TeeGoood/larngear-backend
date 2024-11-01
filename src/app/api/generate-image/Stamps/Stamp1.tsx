import { rotations } from '../route';

export const Stamp1 = ({ index }: { index: number }) => {
    return (
        <svg
            style={{
                padding: `0.${(index + 6) % 6}rem`,
                transform: `translate(${(index - 2) % 2}5%, ${(index - 2) % 2}5%) rotate(${rotations[index - 1]}deg)`,
            }}
            width="61"
            height="66"
            viewBox="0 0 61 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.1516 11.1014L30.1178 15.5283L40.9616 11.4414L31.3365 7.23677L20.1516 11.1014Z"
                fill="#FFD011"
            />
            <path
                d="M8.65695 15.2054L0.780029 11.5912L1.33798 24.61L9.06771 28.4612L8.65695 15.2054Z"
                fill="#FFD011"
            />
            <path
                d="M9.86037 54.0418L19.2466 59.2904L19.0827 46.965L9.48885 42.0521L9.86037 54.0418Z"
                fill="#FFD011"
            />
            <path
                d="M28.8658 38.3249L29.0515 52.0699L40.314 47.1644L40.2396 33.6241L29.0057 38.3947L28.8658 38.3249Z"
                fill="#FF5A47"
            />
            <path
                d="M40.3834 59.7906L51.2142 54.8607V42.4168L40.314 47.1644L40.3831 59.7258L40.3834 59.7906Z"
                fill="#FF5A47"
            />
            <path
                d="M9.48885 42.0521L19.0827 46.965L18.9019 33.3607L9.06771 28.4612L9.48885 42.0521Z"
                fill="#FF5A47"
            />
            <path
                d="M18.7219 19.8234L28.6775 24.3912L40.1646 19.9911L30.1178 15.5283L18.7219 19.8234Z"
                fill="#FF5A47"
            />
            <path
                d="M49.5732 8.18464L40.0873 4.17044L31.3365 7.23677L40.9616 11.4414L49.5732 8.18464Z"
                fill="#FF5A47"
            />
            <path
                d="M28.6775 24.3912L18.7219 19.8234L18.9019 33.3607L28.8658 38.3249L28.6775 24.3912Z"
                fill="#048CD6"
            />
            <path
                d="M0.780029 11.5912L8.65695 15.2054L20.1516 11.1014L12.2672 7.59924L0.780029 11.5912Z"
                fill="#048CD6"
            />
            <path
                d="M40.1646 19.9911L51.2142 15.7585L40.9616 11.4414L30.1178 15.5283L40.1646 19.9911Z"
                fill="#048CD6"
            />
            <path
                d="M60.0758 50.6476V38.6135L51.2142 42.4168V54.8607L60.0758 50.6476Z"
                fill="#048CD6"
            />
            <path
                d="M19.2466 59.2904L29.2245 64.8699L29.0515 52.0699L19.0827 46.965L19.2466 59.2904Z"
                fill="#FC7DA8"
            />
            <path
                d="M1.33798 24.61L1.91937 38.1759L9.48885 42.0521L9.06771 28.4612L1.33798 24.61Z"
                fill="#FC7DA8"
            />
            <path
                d="M51.2142 15.7585L60.0758 12.4665L49.5732 8.18464L40.9616 11.4414L51.2142 15.7585Z"
                fill="#FC7DA8"
            />
            <path
                d="M51.2142 15.7585L40.1646 19.9911L40.1649 20.0284L40.2396 33.6241L51.2142 28.9636V15.832V15.7585Z"
                fill="#FC7DA8"
            />
            <path
                d="M40.2396 33.6241L40.314 47.1644L51.2142 42.4168V28.9636L40.2396 33.6241Z"
                fill="#009A5E"
            />
            <path
                d="M2.42106 49.8818L9.86037 54.0418L9.48885 42.0521L1.91937 38.1759L2.42106 49.8818Z"
                fill="#009A5E"
            />
            <path
                d="M18.7219 19.8234L8.65695 15.2054L9.06771 28.4612L18.9019 33.3607L18.7219 19.8234Z"
                fill="#009A5E"
            />
            <path
                d="M40.1649 20.0284L28.6775 24.3912L28.8658 38.3249L29.0057 38.3947L40.2396 33.6241L40.1649 20.0284Z"
                fill="#FFD011"
            />
            <path
                d="M60.0758 38.6135V25.1571L51.2142 28.9636V42.4168L60.0758 38.6135Z"
                fill="#FFD011"
            />
            <path
                d="M19.0827 46.965L29.0515 52.0699L28.8658 38.3249L18.9019 33.3607L19.0827 46.965Z"
                fill="#FFD011"
            />
            <path
                d="M29.2245 64.8699L40.3831 59.7258L40.314 47.1644L29.0515 52.0699L29.2245 64.8699Z"
                fill="#FFD011"
            />
            <path
                d="M8.65695 15.2054L18.7219 19.8234L30.1178 15.5283L20.1516 11.1014L8.65695 15.2054Z"
                fill="#FFD011"
            />
            <path
                d="M23.3489 3.87338L12.2672 7.59924L20.1516 11.1014L31.3365 7.23677L23.3489 3.87338Z"
                fill="#009A5E"
            />
            <path
                d="M40.0873 4.17044L31.9916 0.869873L23.3489 3.87338L31.3365 7.23677L40.0873 4.17044Z"
                fill="#048CD6"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M51.2142 15.7585L60.0758 12.4665L51.2142 15.832V15.7585Z"
                fill="#FFD011"
            />
            <path
                d="M60.0758 25.1571V12.4665L51.2142 15.832V28.9636L60.0758 25.1571Z"
                fill="#048CD6"
            />
            <path
                d="M0.780029 11.5912L28.6775 24.3912M0.780029 11.5912L31.9916 0.869873M0.780029 11.5912L2.42106 49.8818M0.780029 11.5912L8.65695 15.2054M0.780029 11.5912L1.33798 24.61M0.780029 11.5912L12.2672 7.59924M28.6775 24.3912L28.8658 38.3249M28.6775 24.3912L18.7219 19.8234M28.6775 24.3912L40.1646 19.9911M28.6775 24.3912L40.1649 20.0284M60.0758 12.4665L31.9916 0.869873M60.0758 12.4665V50.6476M60.0758 12.4665L51.2142 15.7585M60.0758 12.4665V25.1571M60.0758 12.4665L49.5732 8.18464M60.0758 12.4665L51.2142 15.832M31.9916 0.869873L40.0873 4.17044M31.9916 0.869873L23.3489 3.87338M60.0758 50.6476V38.6135M60.0758 50.6476L51.2142 54.8607M60.0758 50.6476L40.3831 59.7258M29.2245 64.8699L2.42106 49.8818M29.2245 64.8699L28.8658 38.3249M29.2245 64.8699L19.2466 59.2904M29.2245 64.8699L29.0515 52.0699M29.2245 64.8699L40.3831 59.7258M2.42106 49.8818L9.86037 54.0418M2.42106 49.8818L1.91937 38.1759M12.2672 7.59924L20.1516 11.1014M12.2672 7.59924L23.3489 3.87338M40.1646 19.9911L30.1178 15.5283M40.1646 19.9911L51.2142 15.7585M40.1646 19.9911L40.1649 20.0284M23.3489 3.87338L31.3365 7.23677M51.2142 15.7585L40.9616 11.4414M51.2142 15.7585V15.832M51.2142 54.8607L40.3835 59.7906L40.3831 59.7258M51.2142 54.8607V42.4168M40.0873 4.17044L31.3365 7.23677M40.0873 4.17044L49.5732 8.18464M8.65695 15.2054L20.1516 11.1014M8.65695 15.2054L9.06771 28.4612M8.65695 15.2054L18.7219 19.8234M9.86037 54.0418L19.2466 59.2904M9.86037 54.0418L9.48885 42.0521M49.5732 8.18464L40.9616 11.4414M18.7219 19.8234L30.1178 15.5283M18.7219 19.8234L18.9019 33.3607M19.2466 59.2904L19.0827 46.965M1.91937 38.1759L9.48885 42.0521M1.91937 38.1759L1.33798 24.61M29.0515 52.0699L19.0827 46.965M29.0515 52.0699L28.8658 38.3249M29.0515 52.0699L40.314 47.1644M60.0758 38.6135L51.2142 42.4168M60.0758 38.6135V25.1571M1.33798 24.61L9.06771 28.4612M60.0758 25.1571L51.2142 28.9636M51.2142 28.9636L40.2396 33.6241M51.2142 28.9636V42.4168M51.2142 28.9636V15.832M20.1516 11.1014L30.1178 15.5283M20.1516 11.1014L31.3365 7.23677M30.1178 15.5283L40.9616 11.4414M40.9616 11.4414L31.3365 7.23677M9.06771 28.4612L9.48885 42.0521M9.06771 28.4612L18.9019 33.3607M19.0827 46.965L9.48885 42.0521M19.0827 46.965L18.9019 33.3607M28.8658 38.3249L29.0057 38.3947L40.2396 33.6241M28.8658 38.3249L18.9019 33.3607M40.314 47.1644L40.2396 33.6241M40.314 47.1644L51.2142 42.4168M40.314 47.1644L40.3831 59.7258M40.2396 33.6241L40.1649 20.0284M40.1649 20.0284L51.2142 15.832"
                stroke="black"
                stroke-width="1.4412"
            />
        </svg>
    );
};
