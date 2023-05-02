import style from './MapModif.module.scss'
import {
  FullscreenControl,
  Map,
  SearchControl,
  TrafficControl,
  YMaps,
  ZoomControl,
} from 'react-yandex-maps'

const MapModif = () => {
  const mapOptions = {
    modules: ['geocode', 'SuggestView'],
    defaultOptions: { suppressMapOpenBlock: true },
    width: 1240,
    height: 400,
  }

  return (
    <YMaps
      enterprise
      query={{ apikey: 'f7c64be5-e697-4d40-857b-febbed9b3492' }}
    >
      <Map
        defaultState={{ center: [50.066383, 45.394768], zoom: 11 }}
        {...mapOptions}
        className={style.map}
      >
        <ZoomControl defaultOptions={{ innerWidth: 128 }} />
        <FullscreenControl />
        <SearchControl />
        <TrafficControl />
      </Map>
    </YMaps>
  )
}

export default MapModif

// 50.066383, 45.394768
