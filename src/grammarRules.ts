export interface Rule {
  id: string;
  title: string;
  description: string;
  wrong?: string;
  right?: string;
  formula?: string;
  isAdvanced?: boolean;
  banglaNote?: string;
  proTip?: string;
}

export interface Section {
  id: string;
  num: string;
  title: string;
  tag: string;
  tagClass: string;
  btnClass: string;
  rules: Rule[];
  summaryFormula?: string;
}

export const GRAMMAR_SECTIONS: Section[] = [
  {
    id: "voice",
    num: "01",
    title: "Active to Passive Voice",
    tag: "Section 01",
    tagClass: "tag-verb",
    btnClass: "rg-verb",
    summaryFormula: "Active S + V + O -> Passive O + be + V3 + by + S",
    rules: [
      {
        id: "v-core-1",
        title: "Basic Tense Passive Foundations",
        description: "To change an active sentence to passive, move the active object to the subject position, select the correct form of the verb 'to be' matching the tense/number, convert the main verb into its past participle (V3) form, and add 'by + subject' (agent).",
        wrong: "The writer wrote the masterpiece.",
        right: "The masterpiece was written by the writer.",
        formula: "Passive Sub + be (am/is/are/was/were) + V3 (Past Participle) + by + Agent",
        isAdvanced: false,
        banglaNote: "Active Voice-এর object-টি Passive-এ subject হয় এবং Active-এর subject-টি passive-এ object (by-এর পরে) হয়। মূল verb সবসময় V3 (Past Participle) রূপে বসে।"
      },
      {
        id: "v-core-2",
        title: "Continuous Tense Passive (Being)",
        description: "When converting any progressive/continuous tense (present, past, or future progressive), you must auxiliary block with the correct form of 'to be' followed immediately by the progressive anchor particle 'being' and then the past participle (V3).",
        wrong: "The team is organizing the data.",
        right: "The data is being organized by the team.",
        formula: "Passive Sub + am/is/are/was/were + being + V3 + by + Agent",
        isAdvanced: false,
        banglaNote: "Continuous tense-এর passive করার সময় am/is/are/was/were-এর পরে 'being' এবং তারপর Verb-এর V3 রূপ বসে। 'ing' বাদ দিলে তা Indefinite-এর মতো দেখাবে।"
      },
      {
        id: "v-core-3",
        title: "Perfect Tense Passive (Been)",
        description: "When converting perfect aspect sentences (Present/Past/Future Perfect), preserve the 'has/have/had' voice context but insert the perfect progressive linker 'been' prior to the past participle (V3) verb form.",
        wrong: "The developer has resolved the critical bug.",
        right: "The critical bug has been resolved by the developer.",
        formula: "Passive Sub + has/have/had + been + V3 + by + Agent",
        isAdvanced: false,
        banglaNote: "Perfect tense (Present/Past/Future) এর passive রূপান্তর করতে has/have/had-এর পর একটি অতিরিক্ত Linker 'been' যুক্ত করতে হয়।"
      },
      {
        id: "v-adv-1",
        title: "Passive of Causative Verbs (Make)",
        description: "While the causative verb 'make' takes a bare infinitive (V1 without 'to') in the active voice, its passive transformation strictly requires it to take a full to-infinitive (to + V1).",
        wrong: "The manager made him rewrite the report.",
        right: "He was made to rewrite the report by the manager.",
        formula: "Active: S + make + Agent + V1 | Passive: Agent + be + made + to + V1 + by + S",
        isAdvanced: true,
        banglaNote: "Active voice-এ make-এর পর bare infinitive (no 'to') বসলেও, Passive-এ তা transformed হয়ে fully 'to + V1' (to-infinitive) গ্রহণ করে।"
      },
      {
        id: "v-adv-2",
        title: "Double Object (Ditransitive) Passives",
        description: "When active clauses contain two objects (an indirect personal object and a direct factual object), prefer prioritizing the personal indirect object as the passive subject for natural academic style. If the direct object is made the subject, insert 'to' or 'for' before the indirect object.",
        wrong: "The board offered him a scholarship.",
        right: "He was offered a scholarship by the board. (Preferred) | A scholarship was offered to him by the board.",
        formula: "Preferred: IndirectObj + be + V3 + DirectObj + by + Agent",
        isAdvanced: true,
        banglaNote: "বাক্যে দুটি object (ব্যক্তিবাচক ও বস্তুবাচক) থাকলে ব্যক্তিবাচক object-টিকে subject হিসেবে অগ্রাধিকার দেওয়া শ্রেয়। বস্তুবাচকটিকে subject বানালে ব্যক্তিবাচকটির আগে 'to' বা 'for' বসাতে হয়।"
      },
      {
        id: "v-adv-3",
        title: "Passive with Prepositional (Group) Verbs",
        description: "If an active verb is closely fused with a preposition (forming a phrasal or group verb), keep the preposition directly attached to the verb's past participle (V3) in the passive voice. Do not drop it before the 'by' agent.",
        wrong: "The truck ran over the fragile sign.",
        right: "The fragile sign was run over by the truck.",
        formula: "Passive Sub + be + V3 + preposition + by + Agent",
        isAdvanced: true,
        banglaNote: "Group Verb বা Prepositional verb-সমৃদ্ধ বাক্যের passive করার সময় preposition-টি মূল verb-এর (V3) সাথেই যুক্ত থাকবে, বাদ দেওয়া যাবে না।"
      },
      {
        id: "v-adv-4",
        title: "Quasi-Passive Verbs",
        description: "Quasi-passive verbs are active in design but passive in meaning. For verbs of state or sensation (taste, feel, smell, read), convert using the pattern representing state followed by 'when it is' plus V3, or use a direct is-V3 form with adjective.",
        wrong: "The perfume smells sweet.",
        right: "The perfume is sweet when it is smelled. (or: The perfume is smelled sweet.)",
        formula: "Subject + be + Adjective + when + Pronoun + be + V3",
        isAdvanced: true,
        banglaNote: "Quasi-passive (যে সকল verb গঠনে active কিন্তু অর্থ প্রকাশে passive, যেমন: tastes, feels, reads) এর passive রূপান্তর করতে 'when it is V3' যুক্ত করে করতে হয়।"
      },
      {
        id: "v-adv-5",
        title: "Imperative Passives (Let + Object + Be)",
        description: "For active command/imperative sentences, construct the passive using 'Let' followed by the object of the active command, the auxiliary 'be', and the past participle (V3) of the main verb.",
        wrong: "Shut the gate immediately.",
        right: "Let the gate be shut immediately.",
        formula: "Active: V1 + Object -> Passive: Let + Object + be + V3",
        isAdvanced: true,
        banglaNote: "Imperative sentence-এর passive করার সময় বাক্যটির শুরুতে 'Let' বসে, তারপর object-টি বসে, এরপর একটি 'be' এবং অবশেষে মূল verb-এর V3 (Past Participle) রূপ বসে।"
      },
      {
        id: "v-adv-6",
        title: "Imperative with Personal Object (Let + Indirect Object)",
        description: "If an active imperative sentence begins with 'Let' and has a person-based indirect object resource, construct the passive with Let + Direct Object + be + V3 + by + indirect object.",
        wrong: "Let me resolve the calculation.",
        right: "Let the calculation be resolved by me.",
        formula: "Let + IndirectObj + V1 + DirectObj -> Let + DirectObj + be + V3 + by + IndirectObj",
        isAdvanced: true,
        banglaNote: "Let-যুক্ত Imperative sentence-এর active-এ ব্যক্তিবাচক pronoun থাকলে passive করার সূত্র: Let + direct object + be + V3 + by + ব্যক্তিবাচক pronoun (me, us, him, her, them)।"
      },
      {
        id: "v-adv-7",
        title: "Reflexive Object Passives",
        description: "Reflexive pronouns (himself, lucky, themselves) cannot act as subject elements in a passive sentence. To passive-transform a sentence with a reflexive object, maintain the original active subject, add a fit 'be' auxiliary, append V3, and terminate with 'by + reflexive pronoun'.",
        wrong: "He hurt himself.",
        right: "He was hurt by himself.",
        formula: "Active Subject + be + V3 + by + Reflexive pronoun",
        isAdvanced: true,
        banglaNote: "Reflexive object (himself, myself, ourselves ইত্যাদি) কখনো বাক্যের Subject হতে পারে না। তাই active-এর Subject-টিই passive-এর শুরুতে অপরিবর্তিত থাকবে এবং শেষে 'by' এর সাথে reflexive pronoun বসবে।"
      },
      {
        id: "v-adv-8",
        title: "Infinitive Clause Passive (To Be + V3)",
        description: "To passive-transform an infinitive structure ('to + V1'), convert the infinitive element into the passive infinitive format ('to be + V3') while aligning surrounding auxiliary structures.",
        wrong: "She has to complete the audit.",
        right: "The audit has to be completed by her.",
        formula: "Active: to + V1 + O -> Passive: O + be/have to + be + V3 + by + S",
        isAdvanced: true,
        banglaNote: "Infinitive (to + verb) সম্বলিত active বাক্যকে passive করার সময় 'to'-এর পরে 'be' এবং তারপর V3 বসে।"
      },
      {
        id: "v-adv-9",
        title: "Gerund Clause Passive (Being + V3)",
        description: "A gerund ('V-ing') is turned passive by converting it to 'being + past participle (V3)'. This is essential to prevent awkward double active voices when describing actions on the self.",
        wrong: "I remember my sister taking me to the clinic.",
        right: "I remember being taken to the clinic by my sister.",
        formula: "Active: ... S + V-ing + Obj -> Passive: ... being + V3 + by + Agent",
        isAdvanced: true,
        banglaNote: "Gerund-এর Passive করার সময় (V-ing)-এর স্থলে 'being + V3' এবং শেষে 'by + Agent' ব্যবহৃত হয়।"
      },
      {
        id: "v-adv-10",
        title: "Complex Clause Passives (People Say / Believe)",
        description: "When an active sentence starts with a standard main clause indicating general belief (e.g., 'People say...', 'They believe...') followed by a 'that' clause, convert it by introducing the formal dummy subject 'It' or shifting the sub-clause subject to the front with an infinitive binder.",
        wrong: "People say that the expert is a genius.",
        right: "It is said that the expert is a genius. (or: The expert is said to be a genius.)",
        formula: "Active: People say that + S + V -> Passive: It is said that + S + V | S + be + said + to be...",
        isAdvanced: true,
        banglaNote: "'People say/We believe'-যুক্ত বাক্যের passive করতে 'It is said / It is believed' লিখে 'that'-এর পরের অংশ হুবহু বসাতে হয়। অথবা subordinate clause-এর subject-কে শুরুতে এনে 'is said to be' গঠন করা যায়।"
      },
      {
        id: "v-adv-11",
        title: "Interrogative Passives (Auxiliary Verb Start)",
        description: "For active questions starting with helper auxiliary verbs (Do, Does, Did, Am, Is, Are, Have, Has, etc.), structure the passive by using the corresponding tense form of 'to be' or 'to have' at the sentence beginning to match the incoming passive subject, followed by the passive subject and V3.",
        wrong: "Did you pay the bill? -> Did the bill was paid by you?",
        right: "Did you pay the bill? -> Was the bill paid by you? | Does he need a pen? -> Is a pen needed by him?",
        formula: "Active: Do/Does/Did + S + V1 + O? -> Passive: Am/Is/Are/Was/Were + O + V3 + by + Agent?",
        isAdvanced: true,
        banglaNote: "প্রশ্নবোধক বাক্যে auxiliary verb (do/does/did) থাকলে passive করার সময় passive subject-এর পূর্বে am/is/are/was/were বসে। কখনোই 'Did the bill was paid' বা 'Did was the bill paid' লেখা যাবে না।"
      },
      {
        id: "v-adv-12",
        title: "Interrogative Passives with 'Who' and 'Whom'",
        description: "For active interrogative clauses starting with 'Who', transform the pronoun to 'By whom' at the absolute beginning of the passive sentence. For those starting with 'Whom', convert them to the subject form 'Who' accompanied by the necessary passive verb blocks.",
        wrong: "Who solved the equation? -> By whom the equation was solved? | Whom did you select? -> Whom was selected by you?",
        right: "Who solved the equation? -> By whom was the equation solved? | Whom did you select? -> Who was selected by you?",
        formula: "Active: Who + Verb + Obj? -> Passive: By whom + Aux + Obj + V3? | Active: Whom + Aux + Sub + V1? -> Passive: Who + Aux + V3 + by + Agent?",
        isAdvanced: true,
        banglaNote: "'Who' থাকলে passive-এর শুরুতে 'By whom' বসে এবং 'Whom' থাকলে শুরুতে 'Who' বসে। মনে রাখতে হবে, By whom বা Who বসানোর পর অবশ্যই auxiliary verb-টি subject-এর আগে আসবে (যেমন: By whom WAS the equation solved?)."
      },
      {
        id: "v-adv-13",
        title: "Interrogative Passives with Wh- Adverbs (Why/How/When/Where)",
        description: "For active questions starting with informational question words (Why, When, Where, How, etc.), retain the Wh- adverbs at the beginning of the sentence and arrange the following clause with auxiliary + passive subject + V3 structure.",
        wrong: "How did you solve the puzzle? -> How the puzzle was solved by you?",
        right: "How did you solve the puzzle? -> How was the puzzle solved by you?",
        formula: "Active: Wh-word + Aux + Sub + V + Obj? -> Passive: Wh-word + Aux + Obj + V3 + by + Agent?",
        isAdvanced: true,
        banglaNote: "Wh-word (Why, When, Where, How) দিয়ে শুরু হওয়া প্রশ্নগুলোর passive করার সময় Wh-word শুরুতে অপরিবর্তিত থাকে, তারপর auxiliary verb + object + V3 + by + object বসে।"
      }
    ]
  },
  {
    id: "speech",
    num: "02",
    title: "Direct and Indirect Speech",
    tag: "Section 02",
    tagClass: "tag-sentence",
    btnClass: "rg-sentence",
    summaryFormula: "Direct \"Present\" -> Indirect that + Past | direct Wh- -> Wh- + assertive format",
    rules: [
      {
        id: "s-core-1",
        title: "Reporting Verb & Tense Backshift",
        description: "When of a past-tense reporting verb (said, told), the direct quote block must shift back one tense level in indirect speech to preserve temporal sync.",
        wrong: "He said, \"I write native codes.\"",
        right: "He said that he wrote native codes.",
        formula: "Present Simple -> Past Simple | Present Continuous -> Past Continuous | Past Simple -> Past Perfect",
        isAdvanced: false,
        banglaNote: "Reporting verb যদি Past tense হয়, তবে inverted commas-এর ভেতরের tense 'backshift' বা এক ধাপ অতীতে যাবে (যেমন: Present Simple থেকে Past Simple, Present Perfect থেকে Past Perfect)।"
      },
      {
        id: "s-core-2",
        title: "Pronoun Person Shift (SON Rule)",
        description: "Fidelity of referential speech requires pronouns in the reported clause to shift systematically: 1st person pronouns align with the reporting Subject; 2nd person pronouns align with the reporting Object; 3rd person pronouns remain unchanged.",
        wrong: "He told me, \"You can help my sister.\"",
        right: "He told me that I could help his sister.",
        formula: "SON Model: 1st Person -> Subject | 2nd Person -> Object | 3rd Person -> No Change",
        isAdvanced: false,
        banglaNote: "Inverted comma-র ভেতরে First Person রিপোর্টিং verb-এর Subject-কে অনুসরণ করে; Second Person রিপোর্টিং object-কে অনুসরণ করে; এবং Third Person-এর কোনো পরিবর্তন হয় না (SON - Subject, Object, No change)।"
      },
      {
        id: "s-core-3",
        title: "Deictic Time and Place Shifts",
        description: "Demonstratives, adverbs of near location, and time markers must backshift to objective remote forms because they are reported from a delayed time/distant environment.",
        wrong: "She said, \"I will draft the brief here today.\"",
        right: "She said that she would draft the brief there that day.",
        formula: "this -> that | here -> there | today -> that day | tomorrow -> the following day | yesterday -> the previous day",
        isAdvanced: false,
        banglaNote: "Direct speech-এর সময় ও স্থান নির্দেশক শব্দগুলো Indirect-এ পরিবর্তিত হয়ে দূরবর্তী শব্দে পরিণত হয়। যেমন: next day/following day, previous day ইত্যাদি।"
      },
      {
        id: "s-adv-1",
        title: "Universal Truths & Invariant Facts",
        description: "If the reported clause states a universal scientific fact, standard geological law, or permanent timeless truth, do not perform any manual tense backshift. Retain the direct tense model.",
        wrong: "The tutor said, \"Water boils at 100 degrees Celsius.\"",
        right: "The tutor said that water boils at 100 degrees Celsius.",
        formula: "Reporting Verb (Past) + Timeless Fact -> that + Unchanged Present Simple Verb",
        isAdvanced: true,
        banglaNote: "রিপোর্টিং verb-টি Past tense হলেও, quotation-এর ভেতরের অংশটি যদি চিরন্তন সত্য (Universal Truth) বা বৈজ্ঞানিক সত্য হয়, তবে তার tense-এর কোনো পরিবর্তন হবে না।"
      },
      {
        id: "s-adv-2",
        title: "Interrogative Shifts & Assertive Word Order",
        description: "When converting a direct question to indirect, replace 'said' with 'asked' (or 'inquired'). Do not use the binder 'that'. If the question is a Yes/No type, bind with 'if' or 'whether'. If it is a Wh- question, use the Wh-word. Crucially, invert the question's word order into an assertive declarative format (Subject + Verb).",
        wrong: "He asked her, \"Where are you going?\"",
        right: "He asked her where she was going.",
        formula: "S + asked + Object + Wh-word + (Subject + PastAux/PastVerb) (NO question mark)",
        isAdvanced: true,
        banglaNote: "প্রশ্নবোধক বাক্যের indirect করার সময় 'that' বসে না। Wh-word থাকলে সেটাই বসে, আর না থাকলে 'if' বা 'whether' বসে। সবচেয়ে গুরুত্বপূর্ণ ব্যাপার: বাক্যটি আর প্রশ্নবোধক থাকে না, Assertive (Subject + Verb) হয়ে যায় এবং শেষে ফুলস্টপ বসে।"
      },
      {
        id: "s-adv-3",
        title: "Imperative Infinitive Binders (To & Not To)",
        description: "To change direct commands or requests into indirect speech, replace 'said/told' with a reporting verb of intent (ordered, requested, advised, warned, commanded, entreated), followed by an object, and replace the imperative verb with a positive infinitive ('to + V1') or negative infinitive ('not to + V1').",
        wrong: "The general said to the team, \"Do not fire without permission.\"",
        right: "The general ordered the team not to fire without permission.",
        formula: "S + ordered/requested + O + (not) + to + V1 (bare)",
        isAdvanced: true,
        banglaNote: "Imperative sentence-এর ক্ষেত্রে রিপোর্টিং verb পরিবর্তিত হয়ে ordered/requested/told/advised হয় এবং commas উঠে গিয়ে 'to + V1' বসে। নেতিবাচক হলে 'not to + V1' হবে।"
      },
      {
        id: "s-adv-4",
        title: "Optative Prayer Sentences (Might)",
        description: "Optative wishes or prayer sentences are introduced in the indirect report with the verb 'wished' or 'prayed'. Use the conjunction 'that' and convert the modal structure from 'may' to 'might'.",
        wrong: "Mother said to him, \"May you pass your examination.\"",
        right: "Mother wished that he might pass his examination.",
        formula: "S + wished/prayed + that + Passive Reported S + might + V1",
        isAdvanced: true,
        banglaNote: "আশীর্বাদ বা প্রার্থনা (Optative)-এর ক্ষেত্রে রিপোর্টিং verb হিসেবে 'wished' বা 'prayed' বসে। এরপর 'that' বসে এবং subject-এর পর 'might + V1' বসে (may পরিবর্তিত হয়ে might হয়)।"
      },
      {
        id: "s-adv-5",
        title: "Exclamatory Conversion to Assertive",
        description: "To convert an exclamatory statement, use a reporting verb such as 'exclaimed with joy', 'exclaimed with sorrow', 'exclaimed with wonder', or 'exclaimed with regret'. Bind with 'that' and convert the exclamatory style into a plain, grammatically sound assertive statement.",
        wrong: "The player said, \"Hurrah! We won the trophy!\"",
        right: "The player exclaimed with joy that they had won the trophy.",
        formula: "Subject + exclaimed with joy/sorrow/wonder + that + S + V (Assertive Backshifted) ...",
        isAdvanced: true,
        banglaNote: "আবেগ বা বিস্ময়সূচক বাক্যের ক্ষেত্রে reporting verb পরিবর্তিত হয়ে 'exclaimed with joy/sorrow/wonder/grief' ইত্যাদি হয় এবং 'that'-এর পর সাধারণ Assertive বাক্যের নিয়মে বসে।"
      },
      {
        id: "s-adv-6",
        title: "Imperative with Proposal ('Let us' / 'Let's')",
        description: "If an imperative sentence begins with 'Let us' or 'Let's', it indicates a direct proposal or suggestion. Convert the reporting verb 'said to' into 'proposed to' or 'suggested to', and use the pattern 'that they should' (or sometimes 'we should') followed by the base verb (V1).",
        wrong: "He said to his friend, \"Let's start the company.\"",
        right: "He proposed to his friend that they should start the company.",
        formula: "S + proposed/suggested + to + Obj + that + they/we + should + V1",
        isAdvanced: true,
        banglaNote: "Let us/Let's থাকলে প্রস্তাব বোঝায়, তাই reporting verb পরিবর্তিত হয়ে propose/suggest (to) হয় এবং 'that + they/we should + V1' বসে।"
      },
      {
        id: "s-adv-7",
        title: "Imperative with Non-Proposal ('Let him/them')",
        description: "If 'Let' is followed by any personal pronoun other than 'us' (such as him, her, them, Jerry), it represents a permission or request, not a proposal. Convert using 'said/told', then 'that' followed by the subject and the auxiliary phrase 'might' or 'might be allowed to'.",
        wrong: "The warden said, \"Let him study tonight.\"",
        right: "The warden said that he might study tonight (or: ...might be allowed to study that night).",
        formula: "S + said/told + Obj + that + S2 + might (be allowed to) + V1",
        isAdvanced: true,
        banglaNote: "Let direct প্রস্তাব না বোঝালে (যেমন: Let him go, Let them study) তা 'that + Subject + might + V1' বা 'Subject + might be allowed to + V1' দিয়ে পরিবর্তিত হয়।"
      },
      {
        id: "s-adv-8",
        title: "Speech with Vocative Address Case",
        description: "When the direct speech addresses a person directly inside the quotation mark, extract that noun and represent it as the object of the reporting verb, or introduce your sentence using the participle 'Addressing him as...'.",
        wrong: "The teacher said, \"Tasnim, submit your draft now.\"",
        right: "The teacher ordered Tasnim to submit her draft then. (or: Addressing her as Tasnim, the teacher ordered her to submit...) ",
        formula: "Addressing + Person + as + [noun] + [clause] | Reporting + [addressed person object] + to + V1",
        isAdvanced: true,
        banglaNote: "বাক্যের ভেতরে কাউকে সম্বোধন করা হলে (Vocative Case) রিপোর্টিং verb-এর object হিসেবে তাকে বাইরে নিয়ে আসতে হয়, অথবা 'Addressing as...' দিয়ে বাক্য শুরু করা যায়।"
      },
      {
        id: "s-adv-9",
        title: "Direct Speech with 'Yes' or 'No'",
        description: "When responding with 'Yes' or 'No' in a conversational reporting block, change the direct indicator 'Yes' into 'replied in the affirmative and said that' and 'No' into 'replied in the negative and said that'. Do not concatenate 'yes' or 'no' directly with the reporting verb.",
        wrong: "The suspect said, \"No, I was not at the warehouse.\"",
        right: "The suspect replied in the negative and said that he had not been at the warehouse.",
        formula: "Subject + replied in the affirmative/negative (and said that + Clause)",
        isAdvanced: true,
        banglaNote: "Direct speech-এ 'Yes' থাকলে 'replied in the affirmative and said that' এবং 'No' থাকলে 'replied in the negative and said that' ব্যবহার করতে হয়।"
      },
      {
        id: "s-adv-10",
        title: "The Double Value of 'Must' (Had to vs Must)",
        description: "Convert 'must' to 'had to' for temporary past obligations. However, if the obligation is a natural permanent truth or universal moral law, keep the modal 'must' unchanged.",
        wrong: "He said, \"I must submit this document today.\" and \"We must all die.\"",
        right: "He said that he had to submit that document that day. (and: He said that we must all die.)",
        formula: "must -> had to (Immediate/circumstantial obligation) | must -> must (timeless universal law)",
        isAdvanced: true,
        banglaNote: "সাধারণ আবশ্যকতা বোঝাতে 'must' পরিবর্তিত হয়ে 'had to' হয়। কিন্তু চিরকালীন বাধ্যবাধকতা বা চিরন্তন সত্য (যেমন: We must die) বোঝালে 'must'-এর কোনো পরিবর্তন হয় না।"
      }
    ]
  },
  {
    id: "parts-of-speech",
    num: "03",
    title: "Identifying Different Parts of Speech",
    tag: "Section 03",
    tagClass: "tag-tag",
    btnClass: "rg-tag",
    summaryFormula: "Det + Noun | Noun modifying Noun = Adj | No Object after Preposition = Adverb",
    rules: [
      {
        id: "p-core-1",
        title: "The Contextual Shift Principle",
        description: "The fundamental rule of English parts of speech is that no word is anchored permanently to one class. A word's part of speech is solely defined by its syntactic position and role in the active context of that specific sentence.",
        wrong: "Categorizing \"water\" as a Noun always in any question paper, regardless of usage.",
        right: "\"Water the saplings\" (Verb) vs \"The water is cool\" (Noun) vs \"Water pollution\" (Adjective modifying pollution).",
        formula: "Det + [Noun] | [Verb] + Object | [Noun modifying Noun] = Adjective",
        isAdvanced: false,
        banglaNote: "ইংরেজি ভাষায় কোনো শব্দ নিজস্বভাবে একটি নির্দিষ্ট parts of speech নয়। বাক্যে তার অবস্থান ও কার্যাবলীর উপর ভিত্তি করে তা নির্ধারিত হয়। যেমন: 'water' যখন পানি দেওয়া বোঝায় তখন তা Verb, আর যখন পানির বোতল বোঝায় তখন তা Adjective।",
        proTip: "Shortcut: কোন শব্দ দেখতে কেমন তা না দেখে, বাক্যে তা কী কাজ করছে তা দেখবে। runs [fast] -> verb-কে মডিফাই করে বলে Adverb। a [fast] car -> noun-কে মডিফাই করে বলে Adjective।"
      },
      {
        id: "p-core-2",
        title: "Noun Suffix Identification Markers",
        description: "To identify a Noun rapidly in advanced exam setups, identify Latin and Greek derivative suffix anchors indicating abstract state, process, or role.",
        wrong: "He handled the machinery with professional and efficiency.",
        right: "He handled the machinery with professionalism and efficiency.",
        formula: "Suffix indicators: -tion, -sion, -ness, -ity, -ment, -ance, -ence, -hood, -ship, -dom",
        isAdvanced: false,
        banglaNote: "Noun চেনার সহজ উপায় হলো শব্দের শেষে -tion, -ness, -ment, -ity, -ance, -ence, -hood, -ship, -dom ইত্যাদি প্রত্যয় (suffixes) থাকা। এছাড়া Determinants-এর পর single word-টি সবসময় Noun হয়।",
        proTip: "Pro Tip (Position Golden Rule): Determiner/Preposition/Possessive এবং Verb-এর মাঝে একটি মাত্র শব্দ থাকলে তা সবসময় Noun হয়। সূত্র: Det/Prep + [Noun] + Verb/Prep। যেমন: 'Since his [arrival]...' এখানে arrival একটি Noun।"
      },
      {
        id: "p-core-3",
        title: "Adjective vs Adverb Modifying Spheres",
        description: "An adjective exclusively modifies a noun or pronoun, specifying its state or quality. An adverb modifies a verb, an adjective, or another adverb, specifying time, manner, degree, or position.",
        wrong: "She spoke very academic on the panel.",
        right: "She spoke very academically on the panel.",
        formula: "Adjective modifying Noun | Adverb modifying Verb / Adjective / Adverb",
        isAdvanced: false,
        banglaNote: "Adjective শুধুমাত্র Noun বা Pronoun-কে মডিফাই করে (কেমন মানুষ? -> Smart man)। আর Adverb সাধারণত Verb, Adjective বা অন্য কোনো Adverb-কে মডিফাই করে বা তাদের কাজের ধরন ব্যাখ্যা করে (কেমন চলে? -> runs fast)।",
        proTip: "Shortcut: Noun-কে 'কেমন/কোনটি' (How/Which) দিয়ে প্রশ্ন করলে Adjective পাওয়া যায়। আর Verb-কে 'কখন/কোথায়/কীভাবে' (When/Where/How) দিয়ে প্রশ্ন করলে Adverb পাওয়া যায়।"
      },
      {
        id: "p-adv-1",
        title: "Adjectives Ending in -ly Exception",
        description: "Do not assume every word ending with the suffix '-ly' is an adverb. Standard nouns suffixed with '-ly' output adjectives. Modifying a verb using these words requires 'in a/an + adjective + manner/way'.",
        wrong: "He behaved very friendly. | He did the task cowardly.",
        right: "He behaved in a very friendly manner. (Friendly is an adjective) | He did the task in a cowardly manner.",
        formula: "Noun + ly = Adjective (friendly, manly, motherly, kindly, cowardly, lovely, heavenly)",
        isAdvanced: true,
        banglaNote: "ভর্তি পরীক্ষায় নিয়মিত আসা প্রশ্ন! সব -ly যুক্ত শব্দই Adverb নয়। Noun-এর সাথে -ly যোগ করলে তা Adjective হয় (friend+ly = friendly, father+ly = fatherly)। তাই এগুলোর সাহায্যে কাজ মডিফাই করতে হলে 'in a friendly manner' ফ্রেজ লিখতে হবে।",
        proTip: "Pro Tip (Admission Golden Split): Noun + ly = Adjective (friendly, sisterly, costly)। Adjective + ly = Adverb (rapidly, nicely, strongly)।"
      },
      {
        id: "p-adv-2",
        title: "Gerund (Noun Force) vs Present Participle (Adjective Force)",
        description: "While both present gerunds and participles end with the '-ing' suffix, they represent fully distinct syntactic values. A gerund is a verbal noun (acting as a Subject or Object). A participle is a verbal adjective (representing progressive action, state, or describing a noun).",
        wrong: "In \"The running engine is clean\", running is a gerund because it ends in -ing.",
        right: "In \"The running engine is clean\", running is a Present Participle (acts as adjective). In \"Running is healthy\", running is a Gerund (acts as subject/noun).",
        formula: "Verb + ing + functioning as Noun = Gerund | Verb + ing + functioning as Adjective = Participle",
        isAdvanced: true,
        banglaNote: "Gerund এবং Participle-এর পার্থক্য খুবই গুরুত্বপূর্ণ: Gerund একই সাথে verb ও noun-এর কাজ করে (স্থির অবস্থা বা নাম বোঝায়), অন্যদিকে Participle একই সাথে verb ও adjective-এর কাজ করে (চলমান অবস্থা বা দোষ/গুণ বোঝায়)।",
        proTip: "Pro Tip (Replacement IT Test): V-ing যুক্ত শব্দটিকে 'it' দ্বারা প্রতিস্থাপন করো। যদি বাক্যটি অর্থপূর্ণ থাকে, তবে তা Gerund; অন্যথায় তা Participle। যেমন: 'I like [reading]' -> 'I like [it]' (Reading = Gerund)। 'A [barking] dog' -> 'A [it] dog' (অর্থ হয় না, তাই Barking = Participle)।"
      },
      {
        id: "p-adv-3",
        title: "Preposition vs Adverb Word Clash",
        description: "Many words (e.g., down, up, across, behind, before) serve interchangeably as prepositions or adverbs. A word operates as a Preposition only if it is followed by a Noun/Pronoun object. If there is no object, it operates as an Adverb of direction or state.",
        wrong: "In \"Please stand up\", up is a preposition because it's listed on prepositions indexes.",
        right: "In \"Please stand up\", up is an Adverb (no object). In \"We climbed up the hill\", up is a Preposition (hill is the object).",
        formula: "Preposition + Object (Noun Phrase) | Adverb (stood alone, modifying verb dynamics)",
        isAdvanced: true,
        banglaNote: "preposition এবং adverb-এর পার্থক্য হলো অবজেক্টের উপস্থিতি। কোনো শব্দের পর যদি noun/pronoun object থাকে, তবে সেটি Preposition; আর যদি কোনো অবজেক্ট না থাকে এবং তা verb-কে মডিফাই করে, তবে তা Adverb।",
        proTip: "Shortcut: Preposition-এর পর অবশ্যই Object (Noun/Pronoun) থাকে। Adverb একাকী বসে কাজ মডিফাই করে। যেমন: 'Come [in]' (কোনো অবজেক্ট নেই -> Adverb)। 'He is [in] the room' (the room হলো অবজেক্ট -> Preposition)।"
      },
      {
        id: "p-adv-4",
        title: "The Double Character of That (Relative Pronoun vs Conjunction)",
        description: "The word 'that' operates as a Relative Pronoun when it refers to an antecedent noun (representable as 'which' or 'who') and starts an adjective clause. It acts as a Conjunction when it merely joins clauses without representing any preceding nouns.",
        wrong: "I know that you will pass. (Identify 'that' as relative pronoun here).",
        right: "I know that you will pass. (Conjunction) | The laptop that you gifted me is powerful. (Relative Pronoun - links to laptop).",
        formula: "Antecedent Noun + [that] (Relative Pronoun) | Verb + [that] (Conjunction)",
        isAdvanced: true,
        banglaNote: "Relative Pronoun 'that' সবসময় তার পূর্ববর্তী Noun (Antecedent)-কে নির্দেশ করে এবং একে 'which' বা 'who' দিয়ে প্রতিস্থাপন করা যায়। কিন্তু Conjunction 'that' কোনো পূর্ববর্তী noun-কে নির্দেশ না করে শুধু দুটি ক্লোজকে যুক্ত করে।",
        proTip: "Shortcut: 'that'-এর পূর্বে যদি কোনো Noun থাকে এবং 'that'-কে 'which' বা 'who' দিয়ে বদলে দেখলেও অর্থ ঠিক থাকে, তবে তা Relative Pronoun। আর যদি 'that'-এর পূর্বে কোনো Verb/Adjective থাকে, তবে তা Conjunction।"
      },
      {
        id: "p-adv-5",
        title: "Determiners Acting as Adjectives",
        description: "Demonstrative, possessive, or quantification words (this, that, his, matching, all, some, few) operate as Adjectives (Determiners) when placed immediately before a noun. If they stand alone without a noun, they function as Pronouns.",
        wrong: "In \"These books are invaluable\", 'these' is a demonstrative pronoun.",
        right: "In \"These books are invaluable\", 'these' is a Demonstrative Adjective. In \"These are invaluable\", 'these' is a Demonstrative Pronoun.",
        formula: "[this/that/these/those/some/few] + Noun = Adjective | [this/that/these/those] + Verb = Pronoun",
        isAdvanced: true,
        banglaNote: "This, that, these, those, some, few যখন কোনো noun-এর আগে বসে তাকে মডিফাই করে, তা pronoun নয়, বরং Adjective (Determiner)-এ রূপান্তরিত হয়। এরা সরাসরি verb-এর আগে বসলে Pronoun হয়।",
        proTip: "Shortcut: Demonstrative/Possessive + [Noun] = Adjective (যেমন: [This] laptop is mine)। Demonstrative/Possessive + [Verb] = Pronoun (যেমন: [This] is my laptop)।"
      },
      {
        id: "p-adv-6",
        title: "Prepositive Nouns (Noun Adjuncts)",
        description: "When a noun is placed immediately before another noun to modify it, the first noun functions as an adjective (known as a Noun Adjunct or Prepositive Noun). In grammar tests, identify this word's part of speech as an adjective or noun adjunct.",
        wrong: "In \"He attended a security course\", security is classified as a noun in this position.",
        right: "In \"He attended a security course\", security is a Noun functioning as an Adjective (Noun Adjunct).",
        formula: "Noun1 + Noun2 -> Noun1 acts as Adjective modifying Noun2",
        isAdvanced: true,
        banglaNote: "যখন একটি noun অন্য একটি noun-এর একদম সামনে বসে তাকে মডিফাই করে বা তার বৈশিষ্ট্য প্রকাশ করে, তখন প্রথম noun-টিকে 'Noun Adjunct' বা Adjective-এর সমতূল্য ধরা হয় (যেমন: 'college student'-এ college একটি noun হলেও এখানে তা student-এর Adjective হিসেবে কাজ করছে)।",
        proTip: "Pro Tip: পাশাপাশি দুটি Noun থাকলে প্রথম Noun-টি Adjective-এর কাজ করে। যেমন: [village] doctor, [train] ticket, [admission] test - বন্ধনীর প্রতিটি শব্দই ব্যাকরণগতভাবে Adjective!"
      },
      {
        id: "p-adv-7",
        title: "Relative Pronouns with Fused Antecedents",
        description: "Compounds like 'whoever', 'whichever', and 'whatever' are Nominal Relative Pronouns (also called Fused Relative Pronouns). They combine both the relative pronoun and its antecedent inside a single word, functioning as nouns in clauses.",
        wrong: "Categorizing 'whatever' as a simple adverb or adjective marker always.",
        right: "I will read whatever you publish. (Whatever acts as nominal relative pronoun).",
        formula: "S + V + [fused relative pronoun] + Clause",
        isAdvanced: true,
        banglaNote: "Fused relative pronouns বা 'whoever', 'whatever', 'whichever' একই সাথে antecedent এবং relative pronoun-এর ভূমিকা পালন করে। এদেরকে 'Nominal Relative Pronoun' বলা হয়।",
        proTip: "Pro Tip: Fused pronouns অবজেক্ট বা সাবজেক্ট হিসেবে কাজ করে। 'whatever' মানে 'anything that'। যেহেতু noun-এর মতো কাজ করে, তাই এটিকে Nominal Relative Pronoun বলা হয়।"
      },
      {
        id: "p-adv-8",
        title: "Infinitives vs Prepositional 'To'",
        description: "Distinguish between 'to' acting as an infinitive verb marker (followed by bare verb V1) and 'to' serving as a true preposition (followed by a gerund or noun). This distinction determines correct word categorization in exams.",
        wrong: "In \"We are committed to helping the team\", classify 'to' as an infinitive.",
        right: "In \"We are committed to helping the team\", 'to' is a Preposition (hence followed by the gerund helping).",
        formula: "to + V1 = Infinitive Marker | verb/adjective + to + V-ing/Noun = Preposition",
        isAdvanced: true,
        banglaNote: "ইংরেজি ব্যাকরণে 'to' এর দুটি ভূমিকা রয়েছে। সাধারণ infinitive marker হিসেবে এর পর V1 রূপ বসে (যেমন: to play)। কিন্তু যখন এটি prepositionাল ফ্রেজের অংশ হয় (যেমন: look forward to, with a view to), তখন এর পর gerund (V-ing) বসাতে হয়।",
        proTip: "Pro Tip (Fixed Idioms): Look forward to, with a view to, addicted to, committed to, adverse to - এগুলোর পরে সবসময় V-ing বসে কারণ এখানে 'to' একটি Preposition, Infinitive marker নয়।"
      }
    ]
  }
];
