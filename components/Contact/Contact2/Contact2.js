import { GrMail } from "react-icons/gr";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { HomeCol2Underline } from "../../Home/HomeElement";
import {
  Contact2Container,
  Contact2Wrapper,
  Contact2Row,
  Contact2Col1,
  Contact2Col1Title,
  Contact2Underline,
  Contact2Col1Wrapper,
  Contact2Col1Info,
  Contact2Col1Detail,
  Contact2Col1Icon,
  Contact2Col2,
  Contact2Col2Wrapper,
  Contact2Col2Wrapper2,
} from "./Contact2Element";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZG5zZzE5NiIsImEiOiJjbDBjbGtkM24wMDdqM2ptemxlbXZ4czNvIn0.vWrO6K99Us9bDufEdHv_JA";

const Contact2 = () => {
  return (
    // -------- Contact Info ----------------
    <>
      <Contact2Container>
        <Contact2Wrapper>
          <Contact2Row>
            <Contact2Col1>
              <Contact2Col1Title>Reach us at</Contact2Col1Title>
              <Contact2Underline>
                <HomeCol2Underline />
              </Contact2Underline>
              <Contact2Col1Wrapper>
                {/* ------ ADDRESS 1 ------- */}
                <Contact2Col1Info>
                  <Contact2Col1Icon>
                    <FaMapMarkerAlt />
                  </Contact2Col1Icon>
                  <Contact2Col1Detail>
                    4A Trần Quý Cáp, P.11, Bình Thạnh
                  </Contact2Col1Detail>
                </Contact2Col1Info>
                {/* ------ ADDRESS 2 ------- */}
                <Contact2Col1Info>
                  <Contact2Col1Icon>
                    <FaMapMarkerAlt />
                  </Contact2Col1Icon>
                  <Contact2Col1Detail>
                    377/18 Lê Quang Định, P.5, Bình Thạnh
                  </Contact2Col1Detail>
                </Contact2Col1Info>
                {/* ------ PHONE ------- */}
                <Contact2Col1Info>
                  <Contact2Col1Icon>
                    <FaPhoneAlt />
                  </Contact2Col1Icon>
                  <Contact2Col1Detail>
                    0899.925.194 - 0902.351.473
                  </Contact2Col1Detail>
                </Contact2Col1Info>
                {/* ------ EMAIL ------- */}
                <Contact2Col1Info>
                  <Contact2Col1Icon>
                    <GrMail />
                  </Contact2Col1Icon>
                  <Contact2Col1Detail>
                    joys.coffeebakery@gmail.com
                  </Contact2Col1Detail>
                </Contact2Col1Info>
              </Contact2Col1Wrapper>
            </Contact2Col1>
            <Contact2Col2>
              {/* Phone Width */}
              <Contact2Col2Wrapper>
                <Map
                  initialViewState={{
                    longitude: 106.69320443995356,
                    latitude: 10.814896405699644,
                    zoom: 14.5,
                  }}
                  style={{ width: "85vmin", height: "60vmin" }}
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                  mapboxAccessToken={MAPBOX_TOKEN}
                >
                  {/* Tran Quy Cap */}
                  <Marker
                    longitude={106.69757389636241}
                    latitude={10.817010056404081}
                    color="red"
                  />
                  {/* Le Quang Dinh */}
                  <Marker
                    longitude={106.68924628187894}
                    latitude={10.813643256390192}
                    color="red"
                  />
                </Map>
              </Contact2Col2Wrapper>

              {/* Tablet, Desktop Width */}
              <Contact2Col2Wrapper2>
                <Map
                  initialViewState={{
                    longitude: 106.69320443995356,
                    latitude: 10.814896405699644,
                    zoom: 14.2,
                  }}
                  // style={{ width: "32vmax", height: "20vmax" }}
                  style={{ width: "40vw", height: "25vw" }}
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                  mapboxAccessToken={MAPBOX_TOKEN}
                >
                  {/* Tran Quy Cap */}
                  <Marker
                    longitude={106.69757389636241}
                    latitude={10.817010056404081}
                    color="red"
                  />
                  {/* Le Quang Dinh */}
                  <Marker
                    longitude={106.68924628187894}
                    latitude={10.813643256390192}
                    color="red"
                  />
                </Map>
              </Contact2Col2Wrapper2>
            </Contact2Col2>
          </Contact2Row>
        </Contact2Wrapper>
      </Contact2Container>
    </>
  );
};

export default Contact2;
