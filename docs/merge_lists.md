
# Merge sheets


<div style="display: flex; align-items: center;" markdown>
![mergebutton]{ width="150", align=left}
The flashcard only draw card from **one** properly arranged sheet. if you would like to draw card from multiple sheets, it is required to generate a new sheet contains all the the words. 
</div>


## Example: merge multiple lists for flashcards

Assuming an german english learner has multiple vocabulary sheets, each of the sheet contains a piece of the vocabulary he noted. The source of the vocabulary used in the tutorial can be found via [here](https://www.frenzelschule.de/download/business-english-vocabulary-vocabulary-list-exam.xls) provided by [Private Business School Frenzel](https://www.frenzelschule.de/).


<figure markdown>
![sheetSwitch]{ width="400"}
  <figcaption>Example: Words in multiple sheets </figcaption>
</figure>
<br>

Once you click the `Merge lists` button from `Flash panel` , the loaded table shows all sheet names from the currect Spreadsheet. 

At least 2 sheets selection is required. Each sheet should have proper `front` and `back` in the first row as headers similar to the norm in [`Flash`][flashcardSection] section.


<figure markdown>
![mergeTable]{ width="400"}
  <figcaption>Example: Sheet selection </figcaption>
</figure>




![mergedSheet]{ width="350", align=left}

Finally, the selected sheets will be merged into one sheet named as `Flashing List-` + numeric `time stamp` (order: day, month, year, hour, min, second) based on your local time.

## Supplementary information

* `Header` - The header should be specified as `front` or `back` in order to be detected by the app. Formatting does not matter.
* `Position` - The layout of the sheet might be different, it does not matter as long as the first row specified the headers correctly. 

[mergebutton]: assets/images/merge_button.png
[sheetSwitch]: assets/images/sheets_switch.gif
[mergeTable]: assets/images/merge_table.png
[mergedSheet]: assets/images/merged_sheet.gif
[flashcardSection]: index.md#flashcards





