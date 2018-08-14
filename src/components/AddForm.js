import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: false,
    textField: {
        name: '',
        desc: '',
        img: '',
        count: '',
    },
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleTextFieldChange(event, input) {
    const textField = this.state.textField;
    textField[input] = event.target.value;
    this.setState({
        textField: textField
    });
  }

  fileChangedHandler = (event) => {
    const textField = this.state.textField;
    textField.img = 'static/imgs/cards/'+event.target.files[0].name;
    this.setState({textField: textField});
  }

  render() {
    return (
      <div style={{marginLeft: "auto"}}>
        <Button onClick={this.handleClickOpen} color='default' variant='raised'>{this.props.title}</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>
                {this.props.desc}
            </DialogContentText>
            <TextField autoFocus margin="dense" id="name" label="Name" fullWidth value={this.state.textField.name} onChange={event=>this.handleTextFieldChange(event,'name')}/>
            <TextField autoFocus margin="dense" id="desc" label="Description" fullWidth value={this.state.textField.desc} onChange={event=>this.handleTextFieldChange(event,'desc')}/>
            <TextField autoFocus margin="dense" id="count" label="Count" fullWidth value={this.state.textField.count} onChange={event=>this.handleTextFieldChange(event,'count')}/>
            <p>Upload an image</p>
            <Button variant='outlined'>
                <input style={{fontSize: 14}} type="file" onChange={this.fileChangedHandler} />
            </Button>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={()=>this.props.handle(this.state.textField, this.handleClose)} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}