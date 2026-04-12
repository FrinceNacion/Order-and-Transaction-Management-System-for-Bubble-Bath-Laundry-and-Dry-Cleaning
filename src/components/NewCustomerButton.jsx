import { useState } from "react";

function NewCustomerModal({onHide}) {
    const addCustomerEndpoint = 'http://localhost/bubble-bath-backend/add_customer.php';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setName(name.trim());
        setEmail(email.trim());
        setMobile(mobile.trim());
        setAddress(address.trim());

        const requestOptions = {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, mobile, address })
        };

        fetch(addCustomerEndpoint, requestOptions)
            .then(async response => {
                const text = await response.text();
                return text ? JSON.parse(text) : {};
            })
            .then(data => {
                if (data.success) {
                    console.log('Customer added successfully:', data);
                } else {
                    console.error('Error adding customer:', data.error);
                }
            })
            .catch(error => {
                console.error('Error adding customer:', error);
            });

        onHide();
    }

    return (
        <div className="modal fade show" style={{display: "block"}}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header pb-0 border-0">
                        <h5 className="modal-title" id="newCustomerModalLabel">Add New Customer</h5>
                        <button type="button" className="btn-close" onClick={onHide}></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="customerName" className="form-label text-black">Name</label>
                                <input type="text" className="form-control" id="customerName" placeholder="Customer Name" value={name} onChange={(e) => setName(e.target.value)} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="customerEmail" className="form-label text-black">Email</label>
                                <input type="email" className="form-control" id="customerEmail" placeholder="Customer Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="customerMobile" className="form-label text-black">Mobile No.</label>
                                <input type="number" className="form-control" id="customerMobile" placeholder="Customer Mobile No." value={mobile} onChange={(e) => setMobile(e.target.value)} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="customerAddress" className="form-label text-black">Address</label>
                                <input type="text" className="form-control" id="customerAddress" placeholder="Customer Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onHide}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add Customer</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

function NewCustomerButton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className="btn btn-outline-primary d-flex align-items-center gap-2 h-25">
                <i className="bi bi-person-plus"></i>
                Add Customer
            </button>
            {showModal && <NewCustomerModal onHide={() => setShowModal(false)} />}

        </>
    )
}

export default NewCustomerButton;