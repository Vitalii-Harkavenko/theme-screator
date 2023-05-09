import { ReactSVG } from 'react-svg';

export const Svgs: React.FC<{svg: string, _class?: string}> = ({svg, _class}) => {
	
  return (
	<ReactSVG src={svg} className={_class}/>
  )
}
