// checklist.js


// Page: Checklist
if (window.location.href.includes("checklist.html")) {
    var checklistContent = [
        { 
            category: "Initiation",
            title: "Initiation",
            url: "../checklists/initiation.html"
        },
        { 
            category: "Planning",
            title: "Planning",
            url: "../checklists/planning.html"
        },
        { 
            category: "Execution",
            title: "Execution",
            url: "../checklists/execution.html"
        },
        { 
            category: "Closeout",
            title: "Closeout",
            url: "../checklists/closeout.html"
        },
        { 
            category: "Design",
            title: "Design",
            url: "../checklists/design.html"
        },
        { 
            category: "Development",
            title: "Development",
            url: "../checklists/development.html"
        },
        { 
            category: "QA Testing",
            title: "QA Testing",
            url: "../checklists/qa-testing.html"
        }
    ]


    const checklistGrid = document.getElementById('checklistGrid');

    const checklistGridHTML = checklistContent
    .map(item => `<a href="${item.url}" title="Link to the ${item.category} page" data-category="${item.category}" class="grid-item">
                        <h2>${item.title}</h2>
                    </a>`)
    .join('');

    checklistGrid.innerHTML += checklistGridHTML;

}


// Page: Initiation
if (window.location.href.includes("initiation.html")) {
    var initiation_items = [
        { 
            title: "Who is involved?",
            checkbox_1: "Who should be contacted?",
            checkbox_2: "How often is communication expected?",
            title_1: "What are the goals?",
            checkbox_3: "What are the company’s goals?",
            checkbox_4: "What are the key objectives?",
            checkbox_5: "How do we measure success?",
            checkbox_6: "What challenges are the client currently facing?",
            title_2: "What tools will we use?",
            checkbox_7: "What platform does the client currently use? Shopify || Shopify Plus?",
            checkbox_8: "Is the client open to purchasing suggested apps? Do they want recs?",
            title_3: "What are the restrictions and risks?",
            checkbox_9: "What is the budget for the project?",
            checkbox_10: "What is the timeline for the project?",
            checkbox_11: "Is the budget and/or timeline flexible?",
            checkbox_12: "What are the must-haves vs nice-to-haves?",
            title_4: "Who is involved?",
            checkbox_13: "Who will work on this project?"
        }
    ]
    
    const mainSection = document.getElementById('mainSection');
    
    const mainSectionHTML = initiation_items.map((item) => {
        const checkbox_item = [];

        checkbox_item.push(`<h2>${item.title}</h2>`)

        for (let i = 1; i <= 2; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_1}</h2>`)

        for (let i = 3; i <= 6; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_2}</h2>`)

        for (let i = 7; i <= 8; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_3}</h2>`)

        for (let i = 9; i <= 12; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_4}</h2>`)

        for (let i = 13; i <= 14; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        return checkbox_item.join('');
    });
    
    mainSection.innerHTML = mainSectionHTML.join('');
}


// Page: Planning
if (window.location.href.includes("planning.html")) {
    var planning_items = [
        { 
            title: "Strategy",
            checkbox_1: "Any existing GA events?",
            checkbox_2: "Is the current schema correct?"
        }
    ]
    
    const mainSection = document.getElementById('mainSection');
    
    const mainSectionHTML = planning_items.map((item) => {
        const checkbox_item = [];

        checkbox_item.push(`<h2>${item.title}</h2>`)

        for (let i = 1; i <= 3; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        return checkbox_item.join('');
    });
    
    mainSection.innerHTML = mainSectionHTML.join('');
}


// Page: Execution
if (window.location.href.includes("execution.html")) {
    var execution_items = [
        { 
            title: "Milestones",
            checkbox_1: "Are we meeting or missing milestones?",
            checkbox_2: "Are there any tasks, milestones, etc. at risk of being delayed?",
            title_1: "Communication",
            checkbox_3: "Are there any issues in communication?",
            checkbox_4: "Has the client voiced any concerns? Are their spirits high?",
            title_2: "Team",
            checkbox_5: "Is the team overloaded with work?",
            checkbox_6: "...",
            title_3: "Risks",
            checkbox_7: "What items are high-risk?",
            checkbox_8: "What strategies are in place for high-medium risk items?"
        }
    ]
    
    const mainSection = document.getElementById('mainSection');
    
    const mainSectionHTML = execution_items.map((item) => {
        const checkbox_item = [];

        checkbox_item.push(`<h2>${item.title}</h2>`)

        for (let i = 1; i <= 2; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_1}</h2>`)

        for (let i = 3; i <= 4; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_2}</h2>`)

        for (let i = 5; i <= 6; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_3}</h2>`)

        for (let i = 7; i <= 9; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }
    
        return checkbox_item.join('');
    });
    
    mainSection.innerHTML = mainSectionHTML.join('');
}


// Page: Closeout
if (window.location.href.includes("closeout.html")) {
    var closeout_items = [
        { 
            title: "Internal",
            checkbox_1: "What went well?",
            checkbox_2: "What could we improve on?",
            checkbox_3: "What issues came up?",
            title_1: "Client",
            checkbox_4: "Did the project meet/exceed your expectations?",
            checkbox_5: "What could we improve on?"
        }
    ]
    
    const mainSection = document.getElementById('mainSection');
    
    const mainSectionHTML = closeout_items.map((item) => {
        const checkbox_item = [];

        checkbox_item.push(`<h2>${item.title}</h2>`)

        for (let i = 1; i <= 3; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_1}</h2>`)

        for (let i = 4; i <= 6; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        return checkbox_item.join('');
    });
    
    mainSection.innerHTML = mainSectionHTML.join('');
}


// Page: Design
if (window.location.href.includes("design.html")) {
    var design_items = [
        { 
            title: "A11Y",
            checkbox_1: "Is there sufficient color contrast?",
            title_1: "PDP",
            checkbox_2: "Is there a out-of-stock button design?",
            checkbox_3: "Is there a sale price design?"
        }
    ]
    
    const mainSection = document.getElementById('mainSection');
    
    const mainSectionHTML = design_items.map((item) => {
        const checkbox_item = [];

        checkbox_item.push(`<h2>${item.title}</h2>`)

        for (let i = 0; i <= 1; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_1}</h2>`)

        for (let i = 2; i <= 4; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        return checkbox_item.join('');
    });
    
    mainSection.innerHTML = mainSectionHTML.join('');
}


// Page: Development
if (window.location.href.includes("development.html")) {
    var development_items = [
        { 
            title: "CMS",
            checkbox_1: "Shopify or Shopify Plus?",
            checkbox_2: "Are we migrating from one platform to another?",
            checkbox_3: "What content do we need to migrate?",
            title_1: "Domain",
            checkbox_4: "Do you want to change your current domain name?",
            checkbox_5: "Do you need to purchase a domain name?",
            title_2: "Images / Video",
            checkbox_6: "Do images have alt text?",
            checkbox_7: "Where are images sourced?",
            checkbox_8: "Are videos muted on default? Are we building custom controls?",
            checkbox_9: "What video format do they use or prefer (vimeo, youtube, mp4, mov etc..)",
            checkbox_10: "Image specs? What are the images' aspect ratios?",
            title_3: "Apps",
            checkbox_11: "Which apps are in use?",
            checkbox_12: "Which apps can we omit?",
            title_4: "Sections",
            checkbox_13: "How multi-purpose is each section i.e. do video sections allow a static image? What settings do we include?",
            checkbox_14: "Does each section include global setting options i.e. button style, text color options?",
            title_5: "PDP",
            checkbox_15: "Is the description content coming from the product description? product metafield?",
            checkbox_16: "Is the shipping information product specific or global?",
            title_6: "A11Y",
            checkbox_17: "Is there a 'skip-to-main-content' link?",
            checkbox_18: "Is the site keyboard accessible?"            
        }
    ]
    
    const mainSection = document.getElementById('mainSection');
    
    const mainSectionHTML = development_items.map((item) => {
        const checkbox_item = [];

        checkbox_item.push(`<h2>${item.title}</h2>`)

        for (let i = 1; i <= 3; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_1}</h2>`)

        for (let i = 4; i <= 5; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_2}</h2>`)

        for (let i = 6; i <= 10; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_3}</h2>`)

        for (let i = 11; i <= 12; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_4}</h2>`)

        for (let i = 13; i <= 14; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_5}</h2>`)

        for (let i = 15; i <= 16; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_6}</h2>`)

        for (let i = 17; i <= 18; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        return checkbox_item.join('');
    });
    
    mainSection.innerHTML = mainSectionHTML.join('');
}


// Page: QA Testing
if (window.location.href.includes("qa-testing.html")) {
    var qa_items = [
        { 
            title: "A11Y",
            checkbox_1: "Do all buttons, a, label elements have descriptive text?",
            checkbox_2: "Is the site keyboard accessible?",
            checkbox_3: "Do all images have descriptive alt text?",
            checkbox_4: "Is there only one h1 on the page?",
            checkbox_5: "Are headings in sequential order?",
            checkbox_6: "Is there a skip to main content link?",
            title_1: "Browsers",
            checkbox_7: "Does the site visually match design in Safari, Firefox, Opera..etc?",
            checkbox_8: "Is the site keyboard accessible in Safari, Firefox, Opera..etc?",
            checkbox_9: "Does the site resize smoothly (check XL desktop vs tablet vs mobile)",
            checkbox_10: "Does the site visually and functionally match design on a mobile device (ios vs android)"
        }
    ]
    
    const mainSection = document.getElementById('mainSection');
    
    const mainSectionHTML = qa_items.map((item) => {
        const checkbox_item = [];

        checkbox_item.push(`<h2>${item.title}</h2>`)

        for (let i = 1; i <= 6; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        checkbox_item.push(`<h2>${item.title_1}</h2>`)

        for (let i = 7; i <= 11; i++) {
            if (item[`checkbox_${i}`]) {
                checkbox_item.push(`<div class="checkbox-item">
                    <label for="checkbox-${i}">${item[`checkbox_${i}`]}</label>
                    <input type="checkbox" id="checkbox-${i}" name="${item[`checkbox_${i}`]}">
                </div>`);
            }
        }

        return checkbox_item.join('');
    });
    
    mainSection.innerHTML = mainSectionHTML.join('');
}