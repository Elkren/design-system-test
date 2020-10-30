import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.svg`

`;

export const Logo = () => (
  <LogoWrapper viewBox="0 0 224 56">    
    <g fill="none" fill-rule="evenodd">
        <path d="M201.832973 34.561405c-.421297-.08854-.808216-.344432-1.064757-.994054-.159567-.40346-.522811-.856216-1.064432-.856216h-6.949298c-.425837 0-.807891.275676-1.064432.851351-.334054.762811-.86627 1.116973-1.601838.994054-.595135-.09827-1.408216-.856216-.934054-1.93881.116433-.260757 3.528-7.755244 3.528-7.755244 1.224324.231244 1.238595 1.171136 1.156541 1.623568-.213081 1.136757-1.045298 3.252649-1.093622 3.430054-.072649.275676-.048649.679135.227351.802054.241946.10346.474163.054162.716109-.147567.372648-.30519 3.672973-3.483892 3.997297-3.793946.004865.585405-.014595 1.17081-.01946 1.756864-.009729 1.505514.996973 1.938811 1.413081 2.110703 1.074163.437838 2.472649-.368757 2.942271-.797189.149838.324973 1.040432 2.184973 1.282054 2.815135.469297 1.220108-.575676 2.09092-1.470811 1.899243m-6.779676-14.885513c.086919-.187135.498487-.728433 1.2-.698919.624325.024649.996649.437838 1.127352.688865.169621.329513 4.364756 9.580865 4.364756 9.580865-.444973.40346-1.112756.723567-1.644973.757946-.532216.034378-.929189-.181946-1.205189-.585406-.328865-.47254-.256216-1.186054-.154702-2.893621.029189-.492 0-1.097514-.391784-1.26973-.358379-.162162-.63373.118054-1.025838.457622-.280865.241297-2.138919 1.973189-3.116757 2.928324.096973-.280865.740757-2.101298.658379-2.869297-.106379-.954487-.977514-1.515568-1.858379-1.618703.304865-.669406 1.703352-3.744973 2.047135-4.477946M196.214703 16c-6.489406 0-11.754162 5.353622-11.754162 11.952649 0 6.599027 5.264756 11.957837 11.754162 11.957837 6.493946 0 11.754162-5.353946 11.754162-11.952973C207.968865 21.358811 202.708649 16 196.214703 16" fill="#FBAE1D">
        </path>
        <path d="M26.265514 27.855449c-.813406-.694054-1.962163-1.124757-3.206595-1.124757-2.368865 0-3.852649 1.77081-3.852649 3.709297 0 1.962162 1.507784 3.732973 3.852649 3.732973 1.268432 0 2.39319-.407027 3.206595-1.10108v-5.216433zm3.32627-3.876649v12.99373h-3.32627v-.957081c-1.076757.718054-2.368865 1.148756-3.80465 1.148756-4.068 0-6.460864-3.278594-6.460864-6.724216 0-3.469946 2.392865-6.72454 6.460865-6.72454 1.364108 0 2.703892.431027 3.804649 1.07708V23.9788h3.32627zM44.245373 23.978897v12.993406h-3.32627v-.861081c-.981081.670054-2.201514 1.052756-3.541298 1.052756-3.804973 0-5.551783-1.77081-5.551783-5.982486v-7.202595h3.325946v7.202595c0 2.010162.981405 2.991568 2.823567 2.991568 1.196757 0 2.177838-.383028 2.943568-1.029082v-9.16508h3.32627zM56.410097 33.04827v-5.216757c-.78973-.670054-1.914486-1.100756-3.182594-1.100756-2.225514 0-3.876649 1.603135-3.876649 3.732973 0 2.201513 1.651135 3.709297 3.876649 3.709297 1.244108 0 2.392865-.430703 3.182594-1.124757zm3.35027-14.118486v18.04281h-3.35027v-.78973c-1.05308.62238-2.416865 1.005082-3.780973 1.005082-3.613297 0-6.58054-2.727892-6.58054-6.724216 0-4.068 2.967243-6.724216 6.58054-6.724216 1.388108 0 2.704217.383027 3.780973.98108v-4.572648l3.35027-1.218162zM61.958216 37.028476h3.32627v-12.99373h-3.32627v12.99373zm-.263027-16.344c0-1.076757.861406-1.962162 1.914162-1.962162 1.053081 0 1.890487.885405 1.890487 1.962162 0 1.076756-.837406 1.938486-1.890487 1.938486-1.052756 0-1.914162-.86173-1.914162-1.938486zM78.158022 30.463665c0-2.057838-1.699136-3.732973-3.828973-3.732973-2.105514 0-3.828649 1.675135-3.828649 3.732973 0 2.034162 1.723135 3.709297 3.828649 3.709297 2.129837 0 3.828973-1.675135 3.828973-3.709297m3.27827 0c0 3.709297-3.182595 6.70054-7.107243 6.70054-3.924325 0-7.10692-2.991243-7.10692-6.70054 0-3.732973 3.182595-6.723892 7.10692-6.723892 3.924648 0 7.107243 2.990919 7.107243 6.723892M97.844249 29.428454v7.547351h-.873406v-7.54735c0-3.203028-2.111351-4.926163-4.829189-4.926163-2.135676 0-3.761514.67946-5.047784 1.820108v10.653405h-.873405V23.895481h.873405v1.577514c1.189298-1.164973 3.009081-1.820109 5.120433-1.820109 3.179027 0 5.629946 1.96573 5.629946 5.775568M100.729762 29.962454h11.187243c-.169945-3.203351-2.184-5.484324-5.436-5.484324-3.276 0-5.605621 2.402594-5.751243 5.484324zm12.036649.776433h-12.036649c.19427 3.20335 2.766487 5.484648 5.799892 5.484648 1.965406 0 3.858487-.728108 5.02346-2.208324l.679459.533838c-1.213297 1.52854-3.300324 2.523567-5.751568 2.523567-3.931135 0-6.649297-3.008756-6.649297-6.697621 0-3.712865 2.718162-6.721946 6.649297-6.721946 3.882811 0 6.285406 2.815135 6.285406 6.794919v.290918zM116.896389 24.696432v8.10519c0 2.475243 1.188973 3.421946 2.887784 3.421946 1.067676 0 1.723135-.121622 2.159676-.24292v.800757c-.460865.121298-1.237622.291244-2.329622.291244-1.990054 0-3.615892-1.285946-3.615892-3.785514v-8.590703h-2.40227v-.800756h2.40227v-4.676757l.898054-.300324v4.97708h5.096433v.800757h-5.096433zM143.403578 23.89561l-5.096108 13.08h-.533513l-4.198379-11.575459-4.198378 11.57546h-.534162l-5.144433-13.08h.946379l4.489621 11.55146 4.125406-11.55146h.606486l4.150054 11.55146 4.488973-11.55146zM157.270032 30.374962c0-3.251676-2.790486-5.87254-6.212432-5.87254-3.445946 0-6.236757 2.620865-6.236757 5.87254 0 3.227676 2.790811 5.84854 6.236757 5.84854 3.421946 0 6.212432-2.620864 6.212432-5.84854m.873406 0c0 3.688865-3.178703 6.697622-7.085838 6.697622-3.931135 0-7.110162-3.008757-7.110162-6.697622 0-3.712865 3.179027-6.721946 7.110162-6.721946 3.907135 0 7.085838 3.009081 7.085838 6.721946M161.365892 27.026086c.752108-2.014054 2.305297-3.348972 4.440649-3.372972.703783 0 1.48054.169621 2.256973.557837l-.217946.849406c-.752757-.363892-1.480865-.48519-2.111676-.48519-2.596541 0-4.368 2.426595-4.368 5.53265v6.867891h-.87373v-13.08h.87373v3.130379zM179.27213 36.229438c-.908433-.148865-1.444865-.99146-2.036433-1.981622l-1.649838-2.729513-.348-.575676-.019783-.000324-.746919-1.220108 5.192432-5.986379-1.116324.021081-7.344324 8.380865-.030163-13.249946-.843567.341514v17.746378h.87373v-3.485513l2.705837-3.119352.488433.797838 2.028 3.42227c.449189.768325 1.244757 2.209298 2.655567 2.440865.386919.063568 1.136757.087244 1.712433-.274702l-.240325-.714163c-.395351.232865-.951891.240649-1.280756.186487" fill="#ffffff" fill-rule="nonzero">
        </path>
    </g>
  </LogoWrapper>
);
