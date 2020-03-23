import React, { useState, useEffect } from 'react';

import './App.scss';
import './General.scss';

require('viewport-units-buggyfill').init();

function Header(props) {
    return (
        <div className="Header">
            <div className="log-button" onClick={props.toggleLeftSidebar}><LogIcon /></div>
            <div className="title">Injection</div>
            <div className="settings-button" onClick={props.toggleRightSidebar}><SettingsIcon /></div>
        </div>
    );
}

function Search() {
    const buttons = (
        <div>
            <input id="cancel" className="secondary cancel" type="button" value="Cancel" />
            <input id="submit" className="primary confirm" type="button" value="Submit" />
        </div>
    );
    return (
        <div className="Search">
            <div>
                <input id="searchbar" className="" type="text" placeholder="Search for a customer" />
            </div>
        </div>
    );
}

function LogIcon() {
    return (
        <div className="SvgSymbol LogIcon">
            <svg viewBox="0 0 100 100">
                <path d="M 20 10 H 80 V 90 H 20 V 30 Z" /> 
                <path d="M 40 30 H 70" />
                <path d="M 30 50 H 70" />
                <path d="M 30 70 H 70" />
            </svg>
        </div>
    );
}

function SettingsIcon() {
    return (
        <div className="SvgSymbol LogIcon">
            <svg viewBox="0 0 100 100">
                <path d="M 20 30 H 80" />
                <path d="M 20 50 H 80" />
                <path d="M 20 70 H 80" />
            </svg>
        </div>
    );
}

function Curtain(props) {
    console.log(props.visible);
    return (
        <div className={`Curtain ${props.visible ? "visible" : ""}`}>
            {props.children}
        </div>
    );
}

function Sidebar(props) {
    return (
        <div className={`Sidebar ${props.position} ${props.visible ? "visible" : ""}`}>
            <div className="header">
                <h2 className="title">{props.title}</h2>
            </div>
            <div className="body">
                {props.children}
            </div>
        </div>
    );
}

function TransactionList(props) {
    function getTransactionElements(transactions) {
        return transactions.map(transaction => 
            <tr key={transaction.id}>
                <td className="time">{transaction.date}</td> 
                <td className="customer">{transaction.customer}</td> 
                <td className="description">{transaction.description}</td> 
                <td className="amount">{transaction.amount}</td> 
            </tr>
        );
    }
    
    return (
        <div className="TransactionList">
            <table>
                <thead>
                    <tr>
                        <th className="time">Time</th>
                        <th className="customer">Customer</th>
                        <th className="description">Description</th>
                        <th className="amount">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {getTransactionElements(props.transactions)}
                </tbody>
            </table>
        </div>
    );
}

function CustomerInfo(props) {
    return (
        <div className="CustomerInfo">
            <div className="CustomerName">{props.customer.display_name}:</div>
            <div className="CustomerSaldo">{props.customer.display_saldo}</div>
            <div className="TransactionButton">+</div>
        </div>
    );
}

function ProductItem(props) {
    return (
        <div className="ProductItem">
            <div>
            <span className="ProductName">{props.product.name}</span>
            <span className="ProductPrice">{props.product.price}</span>
            </div>
        </div>
    );
}

function ProductList(props) {
    function getProductItems(products) {
        return products.map(product => (
            <ProductItem product={product} key={product.id} />
        ));
    }

    return (
        <div className="ProductList">
            {getProductItems(props.products)}
        </div>
    );
}

function Dialog(props) {
    return (
        <div className={`Dialog ${props.className}`}>
            <h2 className="title">{props.title}</h2>
            <div className="inputs">
                {props.children}
            </div>
            <div className="controls">
                <input type="button" className="secondary" value="Cancel" onClick={""} />
                <input type="button" className="primary" value="Create" onClick={""} />
            </div>
        </div>
    );
}

function NewProductDialog(props) {
    return (
        <Dialog title="Create a new product" className="new_product">
            <div>
                <span className="label">Name:</span>
                <input type="text" />
            </div>
        </Dialog>
    );
}

function Actions(props) {
    function handleNewCustomerButton(event) {
        props.setCurtain(true); 
    }

    function handleNewProductButton(event) {
        props.setDialog(<NewProductDialog />);
        props.setCurtain(true); 
    }

    return (
        <div className="Actions">
            <input type="button" className="primary" value="New customer" onClick={handleNewCustomerButton} />
            <input type="button" className="primary" value="New product" onClick={handleNewProductButton} />
        </div>
    );
}

function Footer(props) {
    return (
        <div className="Footer">
            <span className="message">Moi</span>
        </div>
    );
}

function App() {
    // eslint-disable-next-line
    const [ state, setState ] = useState({
        customers: [
            {
                "id": 0,
                "display_name": "Janne Salokoski",
                "display_saldo": "60.00€"
            },
            {
                "id": 1,
                "display_name": "Roni Vatto",
                "display_saldo": "-20.00€"
            }
        ],
        products: [
            {
                "id": 0,
                "name": "Salmari",
                "price": "4.00€"
            }, 
            {
                "id": 1,
                "name": "Taikajuoma",
                "price": "1.50€"
            }, 
            {
                "id": 2,
                "name": "Sandels-tölkki",
                "price": "2.00€"
            }, 
            {
                "id": 3,
                "name": "Salmari",
                "price": "4.00€"
            }, 
            {
                "id": 4,
                "name": "Taikajuoma",
                "price": "1.50€"
            }, 
            {
                "id": 5,
                "name": "Sandels-tölkki",
                "price": "2.00€"
            }, 
            {
                "id": 6,
                "name": "Salmari",
                "price": "4.00€"
            }, 
            {
                "id": 7,
                "name": "Taikajuoma",
                "price": "1.50€"
            }, 
            {
                "id": 8,
                "name": "Sandels-tölkki",
                "price": "2.00€"
            }, 
            {
                "id": 9,
                "name": "Salmari",
                "price": "4.00€"
            }, 
            {
                "id": 10,
                "name": "Taikajuoma",
                "price": "1.50€"
            }, 
            {
                "id": 11,
                "name": "Isännän erikoinen",
                "price": "9.00€"
            }, 
            {
                "id": 12,
                "name": "Salmari",
                "price": "4.00€"
            }, 
            {
                "id": 13,
                "name": "Taikajuoma",
                "price": "1.50€"
            }, 
            {
                "id": 14,
                "name": "Isännän erikoinen",
                "price": "9.00€"
            }, 
            {
                "id": 15,
                "name": "Isännän erikoinen",
                "price": "9.00€"
            }, 
            {
                "id": 16,
                "name": "Salmari",
                "price": "4.00€"
            }, 
            {
                "id": 17,
                "name": "Taikajuoma",
                "price": "1.50€"
            }, 
        ],
        transactions: [
            {
                "id": 0,
                "date": "23:48",
                "customer": "Janne Salokoski",
                "description": "Deposit",
                "amount": "60.00€",
            },
            {
                "id": 1,
                "date": "23:56",
                "customer": "Roni Vatto",
                "description": "Taikajuoma",
                "amount": "1.50€",
            },
        ],
        selected_customer: {},
        dialog: undefined
    });

    const [ leftSidebar, setLeftSidebar ] = useState(false);
    function toggleLeftSidebar() {
        setLeftSidebar(!leftSidebar);
    }

    const [ rightSidebar, setRightSidebar ] = useState(false);
    function toggleRightSidebar() {
        setRightSidebar(!rightSidebar);
    }

    const [ curtain, setCurtain ] = useState(false);

    useEffect(() => {
        setState(s => ({...s, selected_customer: s.customers[0]}));
    }, []);

    const [ dialog, setDialog ] = useState(undefined);
    console.log(dialog);

return (
    <div className="wrapper">
        <Sidebar title="Transactions" position="left" visible={leftSidebar}>
            <TransactionList transactions={state.transactions} />
        </Sidebar>

        <Sidebar title="Settings" position="right" visible={rightSidebar}>
            <span>Moi</span>
        </Sidebar>

        <Curtain visible={curtain}>
            {dialog}
        </Curtain>

        <div className="App">
            <Header toggleLeftSidebar={toggleLeftSidebar} toggleRightSidebar={toggleRightSidebar} />
            <div className="MainView Main">
                <Search />
                <CustomerInfo customer={state.selected_customer} setCurtain={setCurtain} />
                <ProductList products={state.products} setCurtain={setCurtain} />
            </div>
            <Actions setCurtain={setCurtain} setDialog={setDialog}/>
        </div>
    </div>
  );
}

export default App;
