import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Проверка компонент</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
