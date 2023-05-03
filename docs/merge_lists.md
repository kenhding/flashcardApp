
# Merge sheets


<div style="display: flex; align-items: center;" markdown>
![mergebutton]{ width="150", align=left}
Flashcard program only selects cards from <b>one</b> appropriately arranged sheet at a time. If one intends to select cards from multiple sheets, it is necessary to create a new sheet that amalgamates all the desired words.
</div>


## Example: merge multiple lists for flashcards

Suppose a German-English language learner possesses multiple sheets of vocabulary, with each sheet containing a portion of the vocabulary that he/she has recorded. The source of the vocabulary utilized in the tutorial may be accessed through the following [link](https://www.frenzelschule.de/download/business-english-vocabulary-vocabulary-list-exam.xls), which has been provided by the [Private Business School Frenzel](https://www.frenzelschule.de/).


<figure markdown>
![sheetSwitch]{ width="400"}
  <figcaption>Example: Words in multiple sheets </figcaption>
</figure>
<br>

Upon selecting the `Merge lists` option from the `Flash` panel, the loaded table will display the names of all sheets contained within the current Spreadsheet.
Please note that it is necessary to select a minimum of 2 sheets in order to proceed. Furthermore, each sheet must possess appropriate headers for the  `front` and `back` sections, which should be located in the first row of the sheet and follow the same format as outlined in the [Flash][flashcardSection] section.


<figure markdown>
![mergeTable]{ width="400"}
  <figcaption>Example: Sheet selection </figcaption>
</figure>


![mergedSheet]{ width="350", align=left}

After selecting the desired sheets, they will be merged into a single sheet, which will be named as `Flashing List-` followed by a numeric `time stamp`. The time stamp will be based on your local time and will be in the following order: day, month, year, hour, minute, second.

## Supplementary information

* `Header` - To ensure detection by the app, please specify the headers as `front` and `back`. The formatting of the header is not relevant.
* `Position` - The layout of the sheet may vary; however, it is crucial to ensure that the headers are correctly specified in the first row of the sheet.

[mergebutton]: assets/images/merge_button.png
[sheetSwitch]: assets/images/sheets_switch.gif
[mergeTable]: assets/images/merge_table.png
[mergedSheet]: assets/images/merged_sheet.gif
[flashcardSection]: index.md#flashcards





