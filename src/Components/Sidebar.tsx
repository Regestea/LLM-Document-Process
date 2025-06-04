import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import {
    faBars,
    faBrain,
    faChartLine,
    faCogs,
    faKey, faSave,
    faShieldAlt
} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import Button from "./Button.tsx";

export default function Sidebar() {

    const [isSidebarOpen, setIsSidebarOpen] = useState<Boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);

    function toggleSidebar() {
        setIsSidebarOpen(() => !isSidebarOpen);
    }

    function toggleModal() {
        setIsModalOpen(() => !isModalOpen);
        if (isSidebarOpen) {
            toggleSidebar();
        }
    }


    return <>
        <aside className={`p-4 pt-6 has-background-grey-darker sidebar ${isSidebarOpen ? 'is-active' : ''}`}>
            <h3 className="title is-4 has-text-light has-text-centered mb-5 mt-6">Dashboard Menu</h3>
            <div className="menu">
                <ul className="menu-list">
                    <li>
                        <Button
                            className="button is-primary is-fullwidth mb-3"
                            title="Model Settings"
                            icon={faCogs}
                            iconClassName="icon"
                            onButtonClick={toggleModal}
                        />
                    </li>
                    <li>
                        <Button
                            className="button is-primary is-outlined is-fullwidth mb-3"
                            title="Analytics"
                            icon={faChartLine}
                            iconClassName="icon"
                            onButtonClick={() => {
                            }}
                        />
                    </li>
                </ul>
            </div>
        </aside>


        <Button 
            className="button sidebar-toggle is-primary is-medium" 
            icon={faBars} 
            iconClassName="icon"
            onButtonClick={toggleSidebar}
        />

        <div className={`modal ${isModalOpen ? 'is-active' : ''}`} >
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head has-background-primary">
                    <p className="modal-card-title has-text-white">AI Model Settings</p>
                    <button className="delete" aria-label="close" onClick={toggleModal} id="closeModalButton"></button>
                </header>
                <section className="modal-card-body has-background-grey-darker">
                    <div className="field mb-4">
                        <label className="label has-text-light has-text-weight-medium">Model Provider</label>
                        <div className="control has-icons-left">
                            <div className="select is-fullwidth is-primary">
                                <select id="modelProviderSelect" defaultValue="">
                                    <option value="" disabled>Select provider...</option>
                                    <option>GitHub AI</option>
                                    <option>Local Model</option>
                                    <option>Cloud Provider X</option>
                                </select>
                            </div>
                            <span className="icon is-small is-left has-text-grey-light">
                                <FontAwesomeIcon icon={faBrain}/>
                              </span>
                        </div>
                    </div>
                    <div className="field mb-4">
                        <label className="label has-text-light has-text-weight-medium">API Key</label>
                        <div className="control has-icons-left">
                            <input id="apiKeyInput" className="input is-primary" type="text"
                                   placeholder="Enter your API Key"/>
                            <span className="icon is-small is-left has-text-grey-light">
                                <FontAwesomeIcon icon={faKey}/>
                              </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label has-text-light has-text-weight-medium">Access Token</label>
                        <div className="control has-icons-left">
                            <input id="accessTokenInput" className="input is-primary" type="password"
                                   placeholder="Enter your Access Token"/>
                            <span className="icon is-small is-left has-text-grey-light">
                                <FontAwesomeIcon icon={faShieldAlt}/>
                              </span>
                        </div>
                    </div>
                </section>
                <footer className="modal-card-foot has-background-grey-dark">
                    <button id="saveSettingsButton" className="button is-primary mr-3"> 
                          <span className="icon">
                            <FontAwesomeIcon icon={faSave}/>
                          </span>
                        <span>Save Changes</span>
                    </button>
                    <button id="cancelModalButton" className="button">Cancel</button>
                </footer>
            </div>
        </div>
    </>
}