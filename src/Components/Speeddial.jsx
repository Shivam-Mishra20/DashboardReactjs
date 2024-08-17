import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

const Speeddial = () => {


    const actions = [
        { icon: <WhatsAppIcon />, name: 'Chat on WhatsApp', action: 'whatsapp' },
        { icon: <PhoneIcon />, name: 'Call', action: 'call' },
        { icon: <PrintIcon />, name: 'Print', action: 'print' },
        { icon: <ShareIcon />, name: 'Share', action: 'share' },
    ];

    // Speed dial actions
    const handleActionClick = (action) => {
        const phoneNumber = '+9129988822'; // Replace with the phone number you want to use

        switch (action) {
            case 'whatsapp':
                window.open(`https://wa.me/${phoneNumber}`, '_blank');
                break;
            case 'call':
                window.location.href = `tel:${phoneNumber}`;
                break;
            case 'print':
                window.print();
                break;
            case 'share':
                if (navigator.share) {
                    navigator.share({
                        title: 'Check this out!',
                        text: 'Here is something interesting I wanted to share with you.',
                        url: window.location.href,
                    }).catch((error) => console.error('Error sharing:', error));
                } else {
                    // Fallback sharing method (e.g., copy link)
                    alert('Share feature is not supported in this browser.');
                }
                break;
            default:
                break;
        }
    };
    return (
        <>

            <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 0, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => handleActionClick(action.action)}
                        />
                    ))}
                </SpeedDial>
            </Box>


        </>
    )
}

export default Speeddial