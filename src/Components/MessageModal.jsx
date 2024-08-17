
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, List, ListItem, Divider } from '@mui/material';


const message = [
    { id: 1, message: 'Welcome to Mishratech! Please check your email for', gmail: "mishratech@gmail.com" },
    { id: 2, message: 'Welcome to Mishratech! Please check your email for', gmail: "mishratech@gmail.com" },
    { id: 3, message: 'Welcome to Mishratech! Please check your email for', gmail: "mishratech@gmail.com" },
    { id: 4, message: 'Welcome to Mishratech! Please check your email for', gmail: "mishratech@gmail.com" },
]

const MessageModal = ({ open, handleClose, title }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <List>
                    {message.map((item) => (
                        <div key={item.id}>
                            <span>{item.id}</span>
                            <ListItem>
                                <DialogContentText id={`alert-dialog-description-${item.id}`}>
                                    {item.message} <strong>{item.gmail}</strong>
                                </DialogContentText>
                            </ListItem>
                            <Divider />
                        </div>
                    ))}
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};


export default MessageModal;
