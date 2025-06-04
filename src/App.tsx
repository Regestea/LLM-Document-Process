import 'bulma/css/bulma.min.css';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import {
    faCogs,
    faChartLine,
    faUserCircle,
    faBars,
    faUpload,
    faSlidersH,
    faFileAlt,
    faPlayCircle,
    faBrain,
    faKey,
    faShieldAlt,
    faSave
} from '@fortawesome/free-solid-svg-icons';

export default function App() {

    const [isSidebarOpen, setIsSidebarOpen] = useState<Boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
    
    function toggleSidebar() {
        setIsSidebarOpen(()=> !isSidebarOpen);
    }
    function toggleModal() {
        setIsModalOpen(() => !isModalOpen);
        if (isSidebarOpen){
            toggleSidebar();
        }
    }
    return (
        <>
            <aside id="sidebar" className={`p-4 has-background-grey-darker ${isSidebarOpen ? 'is-active' : ''}`}>
                <h3 className="title is-4 has-text-light has-text-centered mb-5">Dashboard Menu</h3>
                <div className="menu">
                    <ul className="menu-list">
                        <li>
                            <button id="openModalButton" className="button is-primary is-fullwidth mb-3" onClick={toggleModal}>
                          <span className="icon">
                            <FontAwesomeIcon icon={faCogs}/>
                          </span>
                                <span>Model Settings</span>
                            </button>
                        </li>
                        <li>
                            <button className="button is-primary is-outlined is-fullwidth mb-3">
                          <span className="icon">
                            <FontAwesomeIcon icon={faChartLine}/>
                          </span>
                                <span>Analytics</span>
                            </button>
                        </li>
                        <li>
                            <button className="button is-primary is-outlined is-fullwidth">
                          <span className="icon">
                            <FontAwesomeIcon icon={faUserCircle}/>
                          </span>
                                <span>User Profile</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>

            <button id="sidebarToggle" className="button is-primary is-rounded" onClick={toggleSidebar}>
              <span className="icon">
                <FontAwesomeIcon icon={faBars}/>
              </span>
            </button>

            <div id="contentOverlay"></div>

            <div className="main-container">
                <main id="mainContent" className="has-background-grey-dark p-6">
                    <div className="box has-background-grey-darker p-6 is-max-desktop">
                        <div className="field mb-6">
                            <label className="label is-large has-text-light has-text-centered has-text-weight-medium">Upload
                                Configuration</label>
                            <div className="file is-boxed is-primary has-name is-large is-justify-content-center"
                                 id="fileUploadContainer">
                                <label className="file-label">
                                    <input className="file-input" type="file" name="configFile" id="fileInput"/>
                                    <span className="file-cta">
                                <span className="file-icon">
                                    <FontAwesomeIcon icon={faUpload}/>
                                </span>
                                <span className="file-label">
                                    Choose a file…
                                </span>
                            </span>
                                    <span className="file-name" id="fileNameDisplay">
                                No file selected
                            </span>
                                </label>
                            </div>
                        </div>

                        <div className="field has-background-grey-dark p-5 mb-5">
                            <label className="label has-text-light has-text-weight-medium">Set Parameter Range
                                (Current: <span id="currentRangeMin">1</span>-<span
                                    id="currentRangeMax">50</span>)</label>
                            <div className="field is-grouped is-grouped-centered mb-3">
                                <p className="control">
                                    <input id="inputRangeMin" className="input" type="number" placeholder="Min"
                                           defaultValue={1}/>
                                </p>
                                <p className="control">
                                    <input id="inputRangeMax" className="input" type="number" placeholder="Max"
                                           defaultValue={50}/>
                                </p>
                                <p className="control">
                                    <button id="setRangeButton" className="button is-info"> 
                                      <span className="icon">
                                        <FontAwesomeIcon icon={faSlidersH}/>
                                      </span>
                                        <span>Set Range</span>
                                    </button>
                                </p>
                            </div>
                        </div>

                        <div className="field mb-5">
                            <label className="label has-text-light has-text-weight-medium">Output Format</label>
                            <div className="control has-icons-left">
                                <div className="select is-fullwidth is-primary">
                                    <select id="outputFormatSelect" defaultValue="">
                                        <option value="" disabled>Select format...</option>
                                        <option value="word">Word</option>
                                        <option value="pdf">PDF</option>
                                    </select>
                                </div>
                                <span className="icon is-small is-left has-text-grey-light">
                                <FontAwesomeIcon icon={faFileAlt}/>
                              </span>
                            </div>
                        </div>

                        <div className="field mb-5">
                            <label className="label has-text-light has-text-weight-medium">Command Input</label>
                            <div className="control">
                                <textarea id="commandTextarea" className="textarea is-primary"
                                          placeholder="Enter your command here... e.g., process --verbose data.csv"></textarea>
                            </div>
                        </div>

                        <div className="field has-text-centered pt-3">
                            <button id="startButton" className="button is-primary is-large">
                            <span className="icon is-medium">
                                <FontAwesomeIcon icon={faPlayCircle}/>
                            </span>
                                <span>Start Process</span>
                            </button>
                        </div>
                    </div>
                </main>
            </div>

            <div className={`modal ${isModalOpen ? 'is-active' : ''}`} id="settingsModal">
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
    );
}
