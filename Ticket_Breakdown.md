# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1.  Store custom Agent ids in the database:

- Acceptance Criteria: The system should be able to store and retrieve a custom Agent id for each Agent in the database.
- Time/Effort Estimate: 2-3 hours
- Implementation Details: The new custom Agent id field should be added to the Agents table in the database. The user interface for adding and editing custom Agent ids should be added to the Facility's section of the platform. This can include a new form for adding custom ids for new Agents and an edit form for existing Agents. Additionally, the backend code should be updated to handle the new custom Agent id field when saving and retrieving data from the database.

2.  Use custom Agent ids in Shift table:

- Acceptance Criteria: When a Shift is saved in the database, the system should use the custom Agent id instead of the internal database id for the Agent.
- Time/Effort Estimate: 1-2 hours
- Implementation Details: The Shift table in the database should be updated to use the custom Agent id instead of the internal database id for the Agent. The user interface for adding and editing Shifts should also be updated to use the custom Agent id. The backend code should also be updated to handle the new custom Agent id field when saving and retrieving data from the database.

3.  Use custom Agent ids in report generation:

- Acceptance Criteria: The system should use the custom Agent id instead of the internal database id for the Agent in the reports generated for Facilities.
- Time/Effort Estimate: 1-2 hours
- Implementation Details: The code for the generateReport function should be updated to use the custom Agent id instead of the internal database id for the Agent when generating reports. This may involve updating the data structure used to pass information to the generateReport function.

4.  Add a option to switch between custom id and internal id:

- Acceptance Criteria: Facilities should have the option to switch between using custom Agent ids or internal database ids for the Agent in the reports generated for them.
- Time/Effort Estimate: 1-2 hours
- Implementation Details: A new option should be added to the Facility's section of the platform that allows them to switch between using custom Agent ids or internal database ids for the Agent in the reports generated for them. The backend code should also be updated to handle this new option when generating reports.

5.  Update the test cases to cover the new feature:

- Acceptance Criteria: All the test cases should be updated to cover the new feature
- Time/Effort Estimate: 1 hour
- Implementation Details: Update all the test cases related to the Agents, Shifts and Reports to cover the new feature. This includes adding new test cases for the new functionalities like storing custom Agent ids, using custom Agent ids in Shift table, using custom Agent ids in report generation and adding option to switch between custom id and internal id.

Note: The above time/effort estimates are rough and may vary depending on the complexity of the codebase.
