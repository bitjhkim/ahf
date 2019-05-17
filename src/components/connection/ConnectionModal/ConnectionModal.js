import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input  } from 'reactstrap';

class ConnectnionModal extends Component {
  
  handleChange = (e) => {
    const { onChangeInput } = this.props;
    const { value, name } = e.target;
    onChangeInput({name, value});
  }

  render() {

    const { handleChange } = this;
    const { visible, ip, schema, description, onConfirm, onCancel } = this.props;

    return (
      <div>
        <Modal isOpen={visible}>
          <ModalHeader>Connection Modal</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="connectionIp">IP</Label>
              <Input
                type="text"
                name="ip"
                id="connectionIp"
                value={ip}
                placeholder="127.0.0.1"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="connectionSchema">Schema</Label>
              <Input
                type="text"
                name="schema"
                id="connectionSchema"
                value={schema}
                placeholder="Schema name"
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="connectionDescription">Description</Label>
              <Input 
                type="textarea" 
                name="description"
                id="connectionDescription"  
                value={description} 
                onChange={handleChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onConfirm}>Do Something</Button>{' '}
            <Button color="secondary" onClick={onCancel}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ConnectnionModal;