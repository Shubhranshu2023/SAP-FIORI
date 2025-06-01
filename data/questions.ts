export const questions = [
  {
    id: 1,
    text: "Which activities does the OData Model Editor support? (2 correct answers)",
    options: [
      { id: "A", text: "Edit ODataModels" },
      { id: "B", text: "Deploy ODataModels" },
      { id: "C", text: "Create ODataModels" },
      { id: "D", text: "Test ODataModels" },
    ],
    type: "multiple",
    correctAnswer: ["A", "D"],
  },
  {
    id: 2,
    text: "What are the lifecycle events of an SAPUI5 view controller? (2 correct answers)",
    options: [
      { id: "A", text: "onRendering" },
      { id: "B", text: "onExit" },
      { id: "C", text: "onAfterRendering" },
      { id: "D", text: "onbeforeEntry" },
    ],
    type: "multiple",
    correctAnswer: ["B", "C"],
  },
  {
    id: 3,
    text: "Which features of the SAP Business Application Studio help you extend a standard SAP Fiori app? (2 correct answers)",
    options: [
      {
        id: "A",
        text: "A wizard to generate the files for each extension possibility",
      },
      {
        id: "B",
        text: "An editor to modify the data model in the extended project",
      },
      { id: "C", text: "The Extensibility Pane to choose extension points" },
      {
        id: "D",
        text: "The Descriptor Editor to choose elements for extension",
      },
    ],
    type: "multiple",
    correctAnswer: ["A", "C"],
  },
  {
    id: 4,
    text: "What are some examples of extension points? (3 correct answers)",
    options: [
      { id: "A", text: "Table building block" },
      { id: "B", text: "Custom column" },
      { id: "C", text: "Custom action" },
      { id: "D", text: "Custom section" },
      { id: "E", text: "Field building block" },
    ],
    type: "multiple",
    correctAnswer: ["B", "C", "D"],
  },
  {
    id: 5,
    text: "Which of the following are features of the SAPUI5 SDK? (2 correct answers)",
    options: [
      { id: "A", text: "Interface for Web Dynpro" },
      { id: "B", text: "Full translation support" },
      {
        id: "C",
        text: "Responsiveness across browsers on non-mobile devices only",
      },
      {
        id: "D",
        text: "Feature-rich UI controls for handling complex UI patterns",
      },
    ],
    type: "multiple",
    correctAnswer: ["B", "D"],
  },
  {
    id: 6,
    text: "What does the following ABAP CDS annotation achieve in an SAP Fiori elements app? @UI.lineItem: [{position: 10}] ProductName; @UI.lineItem: [{position: 30}] Price; @UI.lineItem: [{position: 20}] Status;",
    options: [
      {
        id: "A",
        text: "3 columns: ProductName as the first column, Status as the second column, Price as the third column",
      },
      {
        id: "B",
        text: "3 fields in a form: ProductName as the first field, Price as the second field, Status as the third field",
      },
      {
        id: "C",
        text: "3 columns: ProductName as the first column, Price as the second column, Status as the third column",
      },
      {
        id: "D",
        text: "3 fields in a form: ProductName as the first field, Status as the second field, Price as the third field",
      },
    ],
    type: "single",
    correctAnswer: ["C"],
  },
  {
    id: 7,
    text: "To which of the following does an SAP Fiori tile point to directly?",
    options: [
      { id: "A", text: "An SAP Fiori app" },
      {
        id: "B",
        text: "A target mapping with a semantic object and an action",
      },
      { id: "C", text: "An action" },
      { id: "D", text: "A semantic object" },
    ],
    type: "single",
    correctAnswer: ["B"],
  },
  {
    id: 8,
    text: "You need to bind data from a model to an SAPUI5 view control. Which of the following modes are valid? (3 correct answers)",
    options: [
      { id: "A", text: "One-time binding" },
      { id: "B", text: "Three-way binding" },
      { id: "C", text: "Resource-model binding" },
      { id: "D", text: "Two-way binding" },
      { id: "E", text: "One-way binding" },
    ],
    type: "multiple",
    correctAnswer: ["A", "D", "E"],
  },
  {
    id: 9,
    text: "You need the backend server to sort and filter the data used in your customer's app. Which SAPUI5-supported data model must you use?",
    options: [
      { id: "A", text: "ODataModel" },
      { id: "B", text: "ResourceModel" },
      { id: "C", text: "JSONModel" },
      { id: "D", text: "XMLModel" },
    ],
    type: "single",
    correctAnswer: ["A"],
  },
  {
    id: 10,
    text: "You need to securely connect the SAP Web IDE to an on-premise system. How does the SAP Cloud Connector help do this? (2 correct answers)",
    options: [
      {
        id: "A",
        text: "It creates connectivity by a reverse-invoke process on the on-premise system",
      },
      {
        id: "B",
        text: "It supports custom destination API configuration and certificate inspection",
      },
      {
        id: "C",
        text: "It secures an SSL tunnel between the SAP Cloud and the on-premise system",
      },
      { id: "D", text: "It initiates a cloud-based reverse-invoke process" },
    ],
    type: "multiple",
    correctAnswer: ["A", "C"],
  },
  {
    id: 11,
    text: "To visualize metrics using cards, which SAP Fiori elements template does SAP recommend to use?",
    options: [
      { id: "A", text: "List Report Page" },
      { id: "B", text: "Overview Page" },
      { id: "C", text: "Custom Page" },
      { id: "D", text: "Analytical List Page" },
    ],
    type: "single",
    correctAnswer: ["B"],
  },
  {
    id: 12,
    text: "You develop an SAPUI5 app that updates data for sales order and sales order items on the back-end system. What do you create to implement a deep insert? (2 correct answers)",
    options: [
      { id: "A", text: "An object structure that defines the hierarchy" },
      {
        id: "B",
        text: "An individual structures for both Sales Order and Sales Order Items, and then batch them",
      },
      {
        id: "C",
        text: "A flat structure with Sales Order and Sales Order Items, and then add an expand command",
      },
      {
        id: "D",
        text: "A nested structure for Sales Order and Sales Order Items",
      },
    ],
    type: "multiple",
    correctAnswer: ["A", "D"],
  },
  {
    id: 13,
    text: "You perform a QUnit test with the following syntactical options. Which call returns true when you execute it?",
    options: [
      { id: "A", text: 'assert.strictEqual(0,"0","true");' },
      { id: "B", text: 'assert.strictEqual(0," ","true");' },
      { id: "C", text: 'assert.strictEqual(0,null,"true");' },
      { id: "D", text: 'assert.strictEqual(0,-0,"true");' },
    ],
    type: "single",
    correctAnswer: ["D"],
  },
  {
    id: 14,
    text: "What are some advantages of the Model View Controller (MVC) design pattern used in SAPUI5? (2 correct answers)",
    options: [
      { id: "A", text: "Allows to define several views of the same data" },
      {
        id: "B",
        text: "MVC artifacts can be transported and debugged separately",
      },
      { id: "C", text: "It supports quick coding" },
      {
        id: "D",
        text: "Allows changing the view without modifying the underlying business logic",
      },
    ],
    type: "multiple",
    correctAnswer: ["B", "C"],
  },
  {
    id: 15,
    text: "Which SAP Fiori application can you launch using the search function instead of a tile?",
    options: [
      { id: "A", text: "Factsheet" },
      { id: "B", text: "Analytical" },
      { id: "C", text: "Legacy" },
      { id: "D", text: "Transactional" },
    ],
    type: "single",
    correctAnswer: ["A"],
  },
  {
    id: 16,
    text: "Which file is required for configuring an SAP Fiori elements application?",
    options: [
      { id: "A", text: "config.xml" },
      { id: "B", text: "package.json" },
      { id: "C", text: "manifest.json" },
      { id: "D", text: "settings.json" },
    ],
    type: "single",
    correctAnswer: ["C"],
  },
  {
    id: 17,
    text: "You want to add a column to the list report table that will display the status (OK: green, Warning: Yellow, Error: Red). The field called UpdatedStatus in the Sales entity has the followings: '1' in case of errors, '2' in case of warnings, '3' in case everything is OK. Which of the following ABAP CDS annotation must you add?",
    options: [
      { id: "A", text: "@UI.selectionField: [{position: 30}] UpdatedStatus;" },
      {
        id: "B",
        text: "@UI.lineItem: [{position: 30, color: 'UpdatedStatus'}] Status;",
      },
      {
        id: "C",
        text: "@UI.lineItem: [{position: 30, criticality: 'UpdatedStatus'}] Status;",
      },
      {
        id: "D",
        text: "@UI.lineItem: [{position: 30}] @UI.selectionField: [{position: 30}] Status; UpdatedStatus;",
      },
    ],
    type: "single",
    correctAnswer: ["C"],
  },
  {
    id: 18,
    text: "In a standard SAPUI5 project, which file is the Application Descriptor that contains the metadata description of the application?",
    options: [
      { id: "A", text: "Neo-app.json" },
      { id: "B", text: "Manifest.json" },
      { id: "C", text: "Component.js" },
      { id: "D", text: "Index.html" },
    ],
    type: "single",
    correctAnswer: ["B"],
  },
  {
    id: 19,
    text: "Your customer extends an SAP Fiori app with View Replacement. Which activities do you perform? (2 correct answers)",
    options: [
      {
        id: "A",
        text: "Create an SAPUI5 view that replaces the complete view",
      },
      {
        id: "B",
        text: "Verify that adding custom content in the Extension Points is NOT sufficient",
      },
      {
        id: "C",
        text: "Create an SAPUI5 control that replaces the original control",
      },
      { id: "D", text: "Identify a specific SAPUI5 control to be replaced" },
    ],
    type: "multiple",
    correctAnswer: ["A", "B"],
  },
  {
    id: 20,
    text: "You are modeling a new role for your SAP Fiori Launchpad users. Which of the following steps is an optional configuration step?",
    options: [
      { id: "A", text: "Assign Catalog to Role" },
      { id: "B", text: "Create Group and Assign Tile" },
      { id: "C", text: "Create Tiles and Target Mappings" },
      { id: "D", text: "Create Catalog" },
    ],
    type: "single",
    correctAnswer: ["B"],
  },
  {
    id: 21,
    text: "The following ABAP CDS annotation is used in an SAP Fiori elements app. What will be displayed in the upper left part of the object page? @UI.headerInfo: { typeNamePlural: 'Sales Orders', typeName: 'Sales Order', title: { type: #STANDARD, value: 'Sales order Number'}, description: {type: #STANDARD, value: 'Sales Order Owner'}} (2 correct answers)",
    options: [
      { id: "A", text: "'Sales Order'" },
      { id: "B", text: "Sales Order Number value" },
      { id: "C", text: "Sales Order Owner" },
      { id: "D", text: "'Sales Orders'" },
    ],
    type: "multiple",
    correctAnswer: ["A", "C"],
  },
  {
    id: 22,
    text: "Which of the following activities allows you to send commits from your local branch in your Git repository to the remote repository?",
    options: [
      { id: "A", text: "Push" },
      { id: "B", text: "Save" },
      { id: "C", text: "Commit" },
      { id: "D", text: "Clone" },
    ],
    type: "single",
    correctAnswer: ["C"],
  },
  {
    id: 23,
    text: "Which of the following tile types can use an OData service to set the title properties?",
    options: [
      { id: "A", text: "Static" },
      { id: "B", text: "Semi-dynamic" },
      { id: "C", text: "Dynamic" },
    ],
    type: "single",
    correctAnswer: ["C"],
  },
  {
    id: 24,
    text: "Which of the following UI elements can be part of a standard Analytical list page Application? (3 correct answers)",
    options: [
      { id: "A", text: "Visual filter" },
      { id: "B", text: "Form section" },
      { id: "C", text: "Table" },
      { id: "D", text: "Visual table" },
      { id: "E", text: "Interactive chart" },
    ],
    type: "multiple",
    correctAnswer: ["A", "C", "E"],
  },
  {
    id: 25,
    text: "You created a new catalog that contains some apps. You want to assign these apps to an existing role to provide authorization for the business users. How can you do this using the PFCG transaction?",
    options: [
      {
        id: "A",
        text: "By adding the semantic object to the catalog and group",
      },
      { id: "B", text: "By adding the catalog to the menu tab of the role" },
      {
        id: "C",
        text: "By assigning the authorization profile for the catalog in the authorization tab",
      },
      { id: "D", text: "By adding the tile and target mapping to the group" },
    ],
    type: "single",
    correctAnswer: ["D"],
  },
  {
    id: 26,
    text: "You need to configure an SAP Destination service to enable SAP Business Application Studio to extend an existing SAP Fiori app. Which configuration setting for the WebIDE Usage property is required?",
    options: [
      { id: "A", text: "extend_abap" },
      { id: "B", text: "odata_abap" },
      { id: "C", text: "ui5_execute_abap" },
      { id: "D", text: "dev_abap" },
    ],
    type: "single",
    correctAnswer: ["B"],
  },
  {
    id: 27,
    text: "Your customer requires an app to display flight information on a mobile device. Which options can you use to display the same data in a readable format on a mobile device? (2 correct answers)",
    options: [
      {
        id: "A",
        text: "column:<column demandpopin='true' maxscreenwidth='mobile'></column>",
      },
      {
        id: "B",
        text: "column:<column demandpopin='true' maxscreenwidth='mobile' popindisplay='Inline'></column>",
      },
      {
        id: "C",
        text: "column:<column demandpopin='true' minscreenwidth='tablet'></column>",
      },
      {
        id: "D",
        text: "column:<column demandpopin='true' minscreenwidth='tablet' popindisplay='Inline'></column>",
      },
    ],
    type: "multiple",
    correctAnswer: ["C", "D"],
  },
  {
    id: 28,
    text: "Which of the following content types can be displayed within a table cell in SAP Fiori elements applications? (3 correct answers)",
    options: [
      { id: "A", text: "text" },
      { id: "B", text: "chart" },
      { id: "C", text: "image" },
      { id: "D", text: "table" },
      { id: "E", text: "micro chart" },
    ],
    type: "multiple",
    correctAnswer: ["A", "C", "E"],
  },
  {
    id: 29,
    text: "Which model supports deep inserts?",
    options: [
      { id: "A", text: "XML model" },
      { id: "B", text: "OData model" },
      { id: "C", text: "JSON model" },
      { id: "D", text: "Resource model" },
    ],
    type: "single",
    correctAnswer: ["B"],
  },
  {
    id: 30,
    text: "What can you use to add a filter field to a list report in an SAP Fiori elements application? (2 correct answers)",
    options: [
      { id: "A", text: "A UI.LineItem annotation" },
      { id: "B", text: "A UI.SelectionField annotation" },
      { id: "C", text: "A setting in the manifest.json file" },
      { id: "D", text: "The Page Map" },
    ],
    type: "multiple",
    correctAnswer: ["B", "C"],
  },
  {
    id: 31,
    text: "What are some benefits of using OData V4 compared to OData V2? (3 correct answers)",
    options: [
      { id: "A", text: "Flexible programming model" },
      { id: "B", text: "Better UX consistency" },
      { id: "C", text: "Advanced analytical capabilities" },
      { id: "D", text: "Improved data types" },
      { id: "E", text: "Better data compression" },
    ],
    type: "multiple",
    correctAnswer: ["A", "C", "D"],
  },
  {
    id: 32,
    text: "What are some benefits of using SAP Fiori elements? (3 correct answers)",
    options: [
      { id: "A", text: "Accessibility support and multi-device compatibility" },
      { id: "B", text: "Reduced development and maintenance costs" },
      { id: "C", text: "Accelerated development of JavaScript UI code" },
      { id: "D", text: "Custom floorplans for unique scenarios" },
      { id: "E", text: "Compliance with SAP Fiori design specifications" },
    ],
    type: "multiple",
    correctAnswer: ["A", "B", "E"],
  },
  {
    id: 33,
    text: "Which of the following are generic actions provided by SAP Fiori elements? (2 correct answers)",
    options: [
      { id: "A", text: "Trigger external navigation" },
      { id: "B", text: "Delete an item" },
      { id: "C", text: "Create an item" },
      { id: "D", text: "Approve an item" },
    ],
    type: "multiple",
    correctAnswer: ["B", "C"],
  },
  {
    id: 34,
    text: "You finalized your SAPUI5 app in the SAP Business Application Studio. To which of the following platforms can you deploy this app? (2 correct answers)",
    options: [
      { id: "A", text: "SAPUI5 Java repository" },
      { id: "B", text: "SAPUI5 ABAP repository" },
      { id: "C", text: "SAP Fiori launchpad" },
      { id: "D", text: "SAP BTP" },
    ],
    type: "multiple",
    correctAnswer: ["B", "D"],
  },
  {
    id: 35,
    text: "What can you do using the SAP Fiori Tools Extension Pack?",
    options: [
      {
        id: "A",
        text: "Implement SAP Business Technology Platform integration",
      },
      { id: "B", text: "Build SAP Fiori applications" },
      { id: "C", text: "Develop the SAP Fiori elements framework" },
    ],
    type: "single",
    correctAnswer: ["B"],
  },
  {
    id: 36,
    text: "While testing an SAP Fiori app you discover that the navigation on the page does not work correctly. Which of the following agile pyramid options do you use?",
    options: [
      { id: "A", text: "Sinon" },
      { id: "B", text: "QUnit" },
      { id: "C", text: "OPA" },
      { id: "D", text: "Mock server" },
    ],
    type: "single",
    correctAnswer: ["C"],
  },
  {
    id: 37,
    text: "Which control can you use to create responsive table-free layouts?",
    options: [
      { id: "A", text: "sap.ui.layout.ResponsiveFlowLayout" },
      { id: "B", text: "sap.ui.layout.Grid" },
      { id: "C", text: "sap.ui.layout.VerticalLayout" },
      { id: "D", text: "sap.ui.layout.HorizontalLayout" },
    ],
    type: "single",
    correctAnswer: ["B"],
  },
  {
    id: 38,
    text: "In the data in the screenshot, you want to display the List of Companies in the Americas region. Which binding option do you use for the values X, Y, and Z in the view?",
    options: [
      {
        id: "A",
        text: "X: /regions/0/companies Y: companies/0/name Z: companies/0/city",
      },
      {
        id: "B",
        text: "X: /regions/companies Y: companies/name Z: companies/city",
      },
      { id: "C", text: "X: /regions/0/companies Y: name Z: city" },
      { id: "D", text: "X: /regions/companies Y: name Z: city" },
    ],
    type: "single",
    correctAnswer: ["C"],
  },
  {
    id: 39,
    text: "A business user is unable to find an application on the SAP Fiori Launchpad or on the App Finder. Which of the following options could explain why the tile is unavailable? (3 correct answers)",
    options: [
      {
        id: "A",
        text: "The user does not have the proper PFCG role assigned to see the application or tile",
      },
      {
        id: "B",
        text: "The catalogs assigned to the user do not contain the relevant application or tile",
      },
      { id: "C", text: "The OData service authorization is missing" },
      {
        id: "D",
        text: "The target mapping for the tile is missing in the catalog",
      },
      {
        id: "E",
        text: "The end user is missing the required group containing the tile",
      },
    ],
    type: "multiple",
    correctAnswer: ["A", "B", "E"],
  },
  {
    id: 40,
    text: "Which of the following are building blocks provided by SAP Fiori elements? (3 correct answers)",
    options: [
      { id: "A", text: "Filter Field" },
      { id: "B", text: "Custom Page" },
      { id: "C", text: "Routing" },
      { id: "D", text: "Table" },
      { id: "E", text: "Field" },
    ],
    type: "multiple",
    correctAnswer: ["A", "D", "E"],
  },
  {
    id: 41,
    text: "You want to create an SAP Fiori application containing charts and visual filters. Which SAP Fiori template would you use?",
    options: [
      { id: "A", text: "Custom Page" },
      { id: "B", text: "Worklist Page" },
      { id: "C", text: "Analytical List Page" },
    ],
    type: "single",
    correctAnswer: ["C"],
  },
  {
    id: 42,
    text: "What is added by the following ABAP CDS annotation to an SAP Fiori elements app? @UI.facet: [{ { label: 'Personal data', type: #COLLECTION, id: 'persData', position: 10 }, label: 'address', purpose: #STANDARD, position: 10, type: #FIELDGROUP_REFERENCE, parentId: 'persData', targetQualifier: 'address' } }] @UI.fieldGroup: [{qualifier: 'address', position: 10}] Street; @UI.fieldGroup: [{qualifier: 'address', position: 20}] City;",
    options: [
      {
        id: "A",
        text: "Two sections in the object page body: one displaying personal data and one displaying the address details",
      },
      {
        id: "B",
        text: "A section containing a subsection which displays the address details",
      },
      {
        id: "C",
        text: "Two sections in the object page header displaying personal data and person's address details",
      },
    ],
    type: "single",
    correctAnswer: ["B"],
  },
  {
    id: 43,
    text: "Which of the following pattern sequences are the QUnit tests based on?",
    options: [
      { id: "A", text: "Assert, Act, and Arrange" },
      { id: "B", text: "Given, When, and Then" },
      { id: "C", text: "Arrange, Act, and Assert" },
      { id: "D", text: "Given, Then, and When" },
    ],
    type: "single",
    correctAnswer: ["C"],
  },
  {
    id: 44,
    text: "What are some SAP recommended ways of adding custom code to an SAP Fiori elements application? (3 correct answers)",
    options: [
      { id: "A", text: "Use controller extensions" },
      { id: "B", text: "Use private methods of SAP Fiori elements" },
      { id: "C", text: "Create new templates" },
      { id: "D", text: "Use building blocks" },
      {
        id: "E",
        text: "Create apps using the custom page template in the application",
      },
    ],
    type: "multiple",
    correctAnswer: ["A", "D", "E"],
  },
  {
    id: 45,
    text: "How can you configure the Flexible Column Layout in an SAP Fiori elements applications? (2 correct answers)",
    options: [
      { id: "A", text: "By adding a setting to the manifest.json file" },
      { id: "B", text: "By implementing a flexible custom extension" },
      { id: "C", text: "By adding a setting to the package.json file" },
      { id: "D", text: "By using the Page Map" },
    ],
    type: "multiple",
    correctAnswer: ["A", "D"],
  },
  {
    id: 46,
    text: "The following ABAP CDS annotation is used in an SAP Fiori elements app. What is the title of the list report table? @UI.headerInfo: { typeNamePlural: 'Sales Orders', typeName: 'Sales Order', title: { type: #STANDARD, value: 'Sales Order Number'}, description: { type: #STANDARD, value: 'Sales Order Owner'}}",
    options: [
      { id: "A", text: "Sales Order Owners" },
      { id: "B", text: "Sales Orders" },
      { id: "C", text: "Sales Order Numbers" },
    ],
    type: "single",
    correctAnswer: ["B"],
  },

  {
    id: 47,
    text: "In the screenshot, which element of the Arrange-Act-Assert pattern corresponds to the Act in a QUnit test?",
    options: [
      { id: "A", text: 'this.calculator.press("1");' },
      { id: "B", text: "QUnit.test" },
      { id: "C", text: "QUnit.module" },
      { id: "D", text: "teardown : function() {}" },
    ],
    type: "single",
    correctAnswer: ["A"],
  },
  {
    id: 48,
    text: "You develop an SAPUI5 app and implement a FacetFilter. What events are triggered when the user interacts with the FacetFilter content? (2 correct answers)",
    options: [
      { id: "A", text: "listFilter" },
      { id: "B", text: "oninit" },
      { id: "C", text: "reset" },
      { id: "D", text: "confirm" },
    ],
    type: "multiple",
    correctAnswer: ["C", "D"],
  },
  {
    id: 49,
    text: "How can you extend an SAP Fiori app? (3 correct answers)",
    options: [
      { id: "A", text: "Modify the data model to merge data at runtime." },
      { id: "B", text: "Create an adaptation project" },
      { id: "C", text: "Modify the runtime libraries that are to be loaded." },
      { id: "D", text: "Modify the properties of the view control" },
      {
        id: "E",
        text: "Add custom view content in a predefined extension point",
      },
    ],
    type: "multiple",
    correctAnswer: ["B", "D", "E"],
  },
  {
    id: 50,
    text: "Which activities does the OData Model Editor support? (2 correct answers)",
    options: [
      { id: "A", text: "Edit ODataModels" },
      { id: "B", text: "Deploy ODataModels" },
      { id: "C", text: "Create ODataModels" },
      { id: "D", text: "Test ODataModels" },
    ],
    type: "multiple",
    correctAnswer: ["A", "C"],
  },
  {
    id: 51,
    text: "You develop an SAPUI5 app that can be extended. To allow your customer to customize notifications you set up a hook method. What activities are required to set up a hook method? (3 correct answers)",
    options: [
      {
        id: "A",
        text: "Modify the bootstrap option to allow multi-layer extensions of the custom code",
      },
      {
        id: "B",
        text: "Define a new function name ensuring it is reserved for the extension",
      },
      {
        id: "C",
        text: "Identify a strategic location in the controller for the customized code",
      },
      {
        id: "D",
        text: "Add a code snippet to check if the method exists and execute it",
      },
      {
        id: "E",
        text: "Create a .js file in the Util folder to allow the customer to add customized code",
      },
    ],
    type: "multiple",
    correctAnswer: ["B", "C", "D"],
  },
  {
    id: 52,
    text: "In a SAP Fiori hub deployment, where is the SAPUI5 application code stored for a transactional app?",
    options: [
      { id: "A", text: "SAP Front-End Server (FES)" },
      { id: "B", text: "SAP Web Dispatcher" },
      { id: "C", text: "SAP Back-End Server (BES)" },
      { id: "D", text: "SAP HANA XS Engine" },
    ],
    type: "single",
    correctAnswer: ["A"],
  },
  {
    id: 53,
    text: "Your customer asks you to add text for a new language to an app. Which file do you send to the translator?",
    options: [
      { id: "A", text: "Master.view.xml" },
      { id: "B", text: "i18n.properties" },
      { id: "C", text: "Component.js" },
      { id: "D", text: "Manifest.json" },
    ],
    type: "single",
    correctAnswer: ["B"],
  },
  {
    id: 54,
    text: "Your customer wants to enable the SAP Fiori app to be accessed in multiple languages. Which of the following activities do you perform? (3 correct answers)",
    options: [
      { id: "A", text: "Create a resource file containing key/value pairs" },
      { id: "B", text: "Create a resource file with a .props extension." },
      { id: "C", text: "Create a resource file for each language." },
      {
        id: "D",
        text: "Encode the special characters in HTML in the resources file",
      },
      {
        id: "E",
        text: "Create a view file and a controller file for each language",
      },
    ],
    type: "multiple",
    correctAnswer: ["A", "C", "D"],
  },
  {
    id: 55,
    text: "What are some characteristics of fragments? (2 correct answers)",
    options: [
      { id: "A", text: "Fragments have their own controller." },
      { id: "B", text: "Fragments can be a stand-alone view." },
      {
        id: "C",
        text: "Fragments are light-weight UI parts that can be reused",
      },
      {
        id: "D",
        text: "Fragments are found by SAPUI5 Runtime using the module loading mechanism",
      },
    ],
    type: "multiple",
    correctAnswer: ["C", "D"],
  },
  {
    id: 56,
    text: "Your customer asks you to demonstrate their app with localization changes. Which activity do you perform?",
    options: [
      { id: "A", text: "Configure the run configuration file in the app." },
      { id: "B", text: "Show the i18n.properties file translations." },
      { id: "C", text: "Use the preview frame in the run configuration." },
      {
        id: "D",
        text: "Configure the supportedLanguages settings in the Project.json file",
      },
    ],
    type: "single",
    correctAnswer: ["B"],
  },
  {
    id: 57,
    text: "Which HTTP request method can you use to create an OData resource?",
    options: [
      { id: "A", text: "POST" },
      { id: "B", text: "PUT" },
      { id: "C", text: "UPDATE" },
      { id: "D", text: "CHANGE" },
    ],
    type: "single",
    correctAnswer: ["A"],
  },
  {
    id: 58,
    text: "You are extending an SAP Fiori app. Which of the extension properties are defined in the manifest.json? (2 correct answers)",
    options: [
      { id: "A", text: "sap.ui.modelModifications" },
      { id: "B", text: "sap.ui.i18nModifications" },
      { id: "C", text: "sap.ui.controllerExtensions" },
      { id: "D", text: "sap.ui.viewModifications" },
    ],
    type: "multiple",
    correctAnswer: ["C", "D"],
  },
  {
    id: 59,
    text: "Which of the following determines how data is displayed in SAP Fiori element applications?",
    options: [
      { id: "A", text: "Application logic" },
      { id: "B", text: "Templates" },
      { id: "C", text: "Database structure" },
      { id: "D", text: "User permissions" },
    ],
    type: "single",
    correctAnswer: ["B"],
  },
  {
    id: 60,
    text: "Which methods can you use to bind data to the controls in SAPUI5? (3 correct answers)",
    options: [
      { id: "A", text: "Structure" },
      { id: "B", text: "Property" },
      { id: "C", text: "Combination" },
      { id: "D", text: "Element" },
      { id: "E", text: "Aggregation" },
    ],
    type: "multiple",
    correctAnswer: ["B", "D", "E"],
  },
  {
    id: 61,
    text: "What can you do to create a worklist SAP Fiori elements application? (3 correct answers)",
    options: [
      {
        id: "A",
        text: "Add the UI.hideFilterBar annotation to the local annotation file.",
      },
      {
        id: "B",
        text: "Use the Page Map to hide the filterbar of a list report application.",
      },
      {
        id: "C",
        text: "Add a setting to the manifest.json file of your list report.",
      },
      { id: "D", text: "Add the UI.hideFilterBar annotation in the backend." },
      {
        id: "E",
        text: "Use the Application Generator with a suitable template",
      },
    ],
    type: "multiple",
    correctAnswer: ["C", "B", "E"],
  }
];
