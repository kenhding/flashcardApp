
# How to flash


## Launch flashcard and select flashsheet


<div style="display: flex; align-items: center;" markdown>
![flashcardsbutton]{ width="150", align=left}
![flashcardTable]{ width="310", align=left}
To initiate the Flashcard program, select the `Flashcards` button located in the `Flash` panel within the sidebar. This will redirect you to a sheet selector interface, enabling you to choose the sheet that you wish to use for the Flashcard program at a later time.
</div>



<div style="display: flex; align-items: center;" markdown>
![sheetArrangement]{ width="400", align=right}
Please ensure that the selected sheet includes headers that indicate the front and back sides of the Flashcard.
</div>


## Flashcard word selection

<div style="display: flex; align-items: center;" markdown>
![wordSelector1]{ width="450", align=left}
Subsequently, the dialogue box will display the number of words identified from the selected sheet, along with the number of words that have previously been flashed. Within this section, you are afforded the opportunity to specify the quantity of words that you intend to flash during this session.
</div>


## Flashcard with three-pile method

Upon completion of the selection process, the Flashcard will be presented within a flip card, allowing for interactivity via the use of a mouse. To begin, simply select any of the three buttons located below the flip card. It is important to note that the current version of the program utilizes the `the three-pile method`. 

In brief, the `three-pile method` entails progressing through the entire stack of Flashcards, testing oneself as one proceeds. Flashcards that are answered correctly are subsequently sorted into the **YES pile** (`Green button`), while those that are answered incorrectly are sorted into the **NO pile** (`Red button`). Flashcards that elicit hesitancy or doubt are placed in the **MAYBE pile** (`Amber button`). In a subsequent stage, the non-YES Flashcards are reassessed until all the MAYBE/NO Flashcards have been successfully relocated to the YES pile.

For an in-depth analysis and additional background information on the three-pile method, readers are encouraged to refer to the following [article](https://schoolhabits.com/how-to-study-flashcards-3-pile-method/).

<figure markdown>
![flashing]{ width="550"}
  <figcaption>Example: Flashcard implementation </figcaption>
</figure>


## Example Generation (beta)

The current version of the flashcard feature includes **beta support** for example generation using **Google Gemini**, specifically for language learning use cases.

When you hover your cursor **vertically** over a flashcard, a prompt will appear:  
**"Click to generate examples"**

<figure markdown>
![exampleGeneration]{ width="550"}
  <figcaption>Example: Flashcard example generation </figcaption>
</figure>

### Note:
This feature is powered by the **Gemini API** free tier, and you will need to use **your own API key**.

#### Gemini API (free tier) Limitations:
- **Max 15 requests per minute**
- **Up to 1,000,000 tokens per minute**
- **Max 1,500 requests per day**

<div style="display: flex; align-items: center;" markdown>
![settingbutton]{ width="150", align=left}
![geminiApi]{ width="310", align=left}
To enable this feature, first obtain a free Gemini API key from the [official Gemini API page](https://ai.google.dev/gemini-api/docs/api-key). Once you have the key, open the app's **settings panel** and enter it there to activate example generation.
</div>


## Supplementary information

* `Text to audio` - In addition to memorizing the Flashcards via reading, users may also choose to utilize the audio function to listen to the text. It should be noted that the audio function is currently available in a diverse array of languages, although this feature remains in its beta version. We welcome all feedback in relation to this aspect of the program.

* `Flip card setting` - The color of the flip card's front and back sides can be customized by accessing the `Settings` feature located within the `Manual` panel situated in the sidebar.



[flashcardsbutton]: ./assets/images/flashcards_button.png
[flashcardTable]: ./assets/images/flashcard_table.png
[sheetArrangement]: ./assets/images/sheet_arrangement.png
[wordSelector1]: ./assets/images/flashcard_words_selector1.png
[wordSelector2]: ./assets/images/flashcard_words_selector2.png
[flashing]: ./assets/images/flashing.gif
[exampleGeneration]: ./assets/images/exampleGeneration.gif
[settingbutton]: ./assets/images/setting_button.png
[geminiApi]: ./assets/images/gemini_api_blank.png













