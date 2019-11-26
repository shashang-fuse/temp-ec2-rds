import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CustomerDelete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false

        })
    }


    deleteCustomer(id) {
        // /api/customers/7
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render() {
        return (
             <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>DELETE</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle onClose={this.handleClose}>
                        Delete warning
                    </DialogTitle>

                    <DialogContent>
                        Selected customer information will be deleted
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer(this.props.id)}}>DELETE</Button>
                        <Button variant="outline" color="primary" onClick={this.handleClose}>CLOSE</Button>
                    </DialogActions>
                </Dialog>
            </div>

        )
    }
}

export default CustomerDelete;