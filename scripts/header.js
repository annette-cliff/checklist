// header.js

const header = document.getElementById('header');

const headerHTML = `<nav class="navigation wrapper-top">
                        <ul class="flex large--justify-evenly">
                            <li><a href="../checklists/initiation.html" title="Link to the initiation page">Initiation</a></li>
                            <li><a href="../checklists/planning.html" title="Link to the planning page">Planning</a></li>
                            <li><a href="../checklists/execution.html" title="Link to the execution page">Execution</a></li>
                            <li><a href="../checklists/closeout.html" title="Link to the closeout page">Closeout</a></li>
                            <li><a href="../checklists/design.html" title="Link to the design page">Design</a></li>
                            <li><a href="../checklists/development.html" title="Link to the development page">Development</a></li>
                            <li><a href="../checklists/qa-testing.html" title="Link to the qa testing page">QA Testing</a></li>
                        </ul>
                    </nav>`

header.innerHTML = headerHTML;