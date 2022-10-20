import icon from '../../assets/notification-icon.svg';
import './style.css'

type Props = {
    saleId: number;
}

export function NotificationButton({saleId}:Props) {
    return (
        <div className='dsmeta-red-btn' 
        onClick={() => ''}>
            <img  src={icon} alt="Notificar"/>
     </div>
    )
}