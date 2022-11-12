export const formData = {
  Registration: {
    Client: [
      {
        name: "name",
        label: "Name",
        type: "TEXT",
        show: true,
        sortorder: 1,
        isMandatory: true,
        sw:"Jina"
      },
      {
        name: "gender",
        label: "Gender",
        type: "SELECT",
        show: true,
        sortorder: 2,
        sw:"Jinsia",
        isMandatory: false,
        options: [
          { name: "Select your" , code: "", sortorder: 0 },
          {
            name: "MALE",
            code: "code_1",
            sortorder: 1,
            sw:"MWANAUME"
          },
          {
            name: "FEMALE",
            code: "code_2",
            sortorder: 2,
            sw:"KIKE"
          },
          {
            name: "Non-Binary",
            code: "code_3",
            sortorder: 3,
            sw:"Isiyo ya binary"
          },
        ],
      },
      {
        name: "age",
        label: "Age",
        type: "NUMBER",
        sw:"umri",
        sortorder: 3,
        isMandatory: false,
        show: true,
      },
      {
        name: "dateOfBirth",
        label: "DOB",
        type: "DATE",
        sw:"Tarehe ya kuzaliwa",
        show: true,
        isMandatory: false,
        sortorder: 4,
      },
      {
        name: "email",
        label: "Email",
        type: "TEXT",
        show: true,
        sw:"Barua pepe",
        sortorder: 5,
        isMandatory: true,
      },
      {
        name: "contactNumber",
        label: "Contact",
        sw:"Mawasiliano",
        type: "TEXT",
        show: true,
        isMandatory: false,
        sortorder: 6,
      },
      {
        name: "residence",
        label: "Address",
        sw:"Anwani",
        type: "LONG_TEXT",
        show: true,
        sortorder: 7,
        isMandatory: false,
      },
      {
        name: "nationality",
        label: "Nationality",
        isMandatory: false,
        type: "SELECT",
        sw:"Utaifa",
        show: true,
        sortorder: 8,
        options: [
          { name: "Select your", code: "", sortorder: 0 },
          {
            name: "Kenyan",
            code: "code_5",
            sortorder: 1,
            sw:"Mkenya"
          },
          {
            name: "Tanzanian",
            code: "code_6",
            sortorder: 2,
            sw:"Mtanzania"
          },
          {
            name: "Ugandan",
            code: "code_7",
            sortorder: 3,
            sw:"wa Uganda"
          },
          {
            name: "Somali, Somalian",
            code: "code_8",
            sortorder: 4,
            sw:"Msomali, Msomali"
          },
          {
            name: "Ethiopian",
            code: "code_9",
            sortorder: 5,
            sw:"wa Ethiopia"
          },
          {
            name: "South Sudanese",
            code: "code_10",
            sortorder: 6,
            sw:"Sudan Kusini"
          },
          {
            name: "Others",
            code: "code_11",
            sortorder: 6,
            sw:"Wengine"
          },
        ],
      },
      {
        name: "maritalStatus",
        label: "Marital Status",
        sw:"Hali ya ndoa",
        isMandatory: false,
        type: "SELECT",
        show: true,
        sortorder: 9,
        options: [
          {
            name: "Select your",
           code: "",
            sortorder: 0 
          },
          {
            code: "code_13",
            name: "Never Married or Single",
            sortorder: 1,
            sw:"Sijawahi Kuolewa au Kuolewa"
          },
          {
            code: "code_14",
            name: "Married",
            sortorder: 2,
            sw:"Ndoa"
          },
          {
            code: "code_15",
            name: "Divorced or Separated",
            sortorder: 3,
            sw:"Kuachwa au Kutengwa"
          },
          {
            code: "code_16",
            name: "Widowed",
            sortorder: 4,
            sw:"Mjane"
          },
        ],
      },
      {
        name: "religion",
        label: "Religion",
        type: "SELECT",
        isMandatory: false,
        show: true,
        sw:"Dini",
        sortorder: 10,
        options: [
          { name: "Select your", code: "", sortorder: 0 },
          {
            name: "Christians",
            code: "code_18",
            sortorder: 1,
            sw:"Wakristo"
          },
          {
            name: "Muslim",
            code: "code_19",
            sortorder: 2,
            sw:"Muislamu"
          },
          {
            name: "No Religion",
            code: "code_20",
            sortorder: 3,
            sw:"Hakuna Dini"
          },
          {
            name: "Others",
            code: "code_21",
            sortorder: 4,
            sw:"Wengine"
          },
        ],
      },
      {
        name: "occupation",
        label: "Occupation",
        type: "SELECT",
        sw:"Kazi",
        isMandatory: false,
        show: true,
        sortorder: 11,
        options: [
          { name: "Select your", code: "", sortorder: 0 },
          {
            name: "Medical/Health",
            code: "code_23",
            sortorder: 1,
            sw:"Matibabu/Afya"
          },
          {
            name: "Administrative/Secretarial",
            code: "code_24",
            sortorder: 2,
            sw:"Utawala/Katibu"
          },
          {
            name: "Sales/Marketing",
            code: "code_25",
            sortorder: 3,
            sw:"Uuzaji/Uuzaji"
          },
          {
            name: "Finance/Audit/Accounting",
            code: "code_26",
            sortorder: 4,
            sw:"Fedha/Ukaguzi/Uhasibu"
          },
          {
            name: "Education",
            code: "code_27",
            sortorder: 5,
            sw:"Elimu"
          },
          {
            name: "NGO",
            code: "code_28",
            sortorder: 6,
            sw:"NGO"
          },
          {
            name: "IT",
            code: "code_29",
            sortorder: 7,
            sw:"IT"
          },
          {
            name: "Building/Construction",
            code: "code_30",
            sortorder: 8,
            sw:"Ujenzi/Ujenzi"
          },
          {
            name: "Project Management",
            code: "code_31",
            sortorder: 9,
            sw:"Usimamizi wa Mradi"
          },
          {
            name: "Procurement",
            code: "code_32",
            sortorder: 10,
            sw:"Ununuzi"
          },
          {
            name: "Others",
            code: "code_33",
            sortorder: 11,
            sw:"Wengine"
          },
        ],
      },
      {
        name: "nextOfKin",
        label: "Next of Kin",
        type: "TEXT",
        sw:"Aliyefuata Jamaa",
        isMandatory: false,
        show: true,
        sortorder: 12,
      },
      {
        name: "nextOfKinContact",
        label: "Next of Kin Contact",
        type: "TEXT",
        show: true,
        sw:"Karibu na Kin Contact",
        isMandatory: false,
        sortorder: 13,
      },
      {
        name: "nhifNumber",
        label: "Nhif Number",
        type: "TEXT",
        sw:"Nambari ya Nhif",
        show: true,
        isMandatory: false,
        sortorder: 14,
      },
      {
        name: "idNumber",
        label: "ID Number",
        type: "TEXT",
        sw:"Nambari ya kitambulisho",
        show: true,
        isMandatory: false,
        sortorder: 15,
      },
      {
        name: "foodAllergies",
        label: "Food Allergies",
        type: "LONG_TEXT",
        sw:"Mzio wa Chakula",
        show: true,
        isMandatory: false,
        sortorder: 16
      },
      {
        name: "medicationAllergies",
        label: "Medication Allergies",
        type: "LONG_TEXT",
        sw:"Mzio wa Dawa",
        show: true,
        isMandatory: false,
        sortorder: 17
      },

      {
        name: "organisationunitId",
        label: "organisation Unique Number",
        type: "NUMBER",
        show: false,
        sortorder: 18,
        isMandatory: true,
        autofill: true,
      },
    ],
    Doctor: [
      {
        name: "firstName",
        label: "First Name",
        sw:"Jina la kwanza",
        type: "TEXT",
        show: true,
        sortorder: 1,
        isMandatory: true,
      },
      {
        name: "lastName",
        label: "Last Name",
        sw:"Jina la kwanza",
        type: "TEXT",
        show: true,
        sortorder: 2,
        isMandatory: true,
      },
      {
        name: "gender",
        label: "Gender",
        sw:"Jinsia",
        type: "SELECT",
        show: true,
        sortorder: 3,
        isMandatory: false,
        options: [
          { name: "Select your" , code: "", sortorder: 0 },
          {
            name: "MALE",
            code: "code_1",
            sortorder: 1,
            sw:"MWANAUME"
          },
          {
            name: "FEMALE",
            code: "code_2",
            sortorder: 2,
            sw:"KIKE"
          },
          {
            name: "Non-Binary",
            code: "code_3",
            sortorder: 3,
            sw:"Isiyo ya binary"
          },
        ],
      },
      {
        name: "telephoneNumber",
        label: "Contact Number",
        type: "TEXT",
        sw:"Namba ya mawasiliano",
        show: true,
        isMandatory: true,
        sortorder: 4,
      },
      {
        name: "email",
        label: "Email",
        sw:"Barua pepe",
        type: "TEXT",
        show: true,
        sortorder: 2,
        isMandatory: true,
      },
      {
        name: "dateOfBirth",
        label: "DOB",
        type: "DATE",
        sw:"Tarehe ya kuzaliwa",
        show: true,
        isMandatory: false,
        sortorder: 6,
      },
      {
        name: "role",
        label: "Role",
        sw:"Jukumu",
        type: "SELECT",
        show: true,
        sortorder: 5,
        isMandatory: true,
        options: [
          { name: "Select your", code: "", sortorder: 0 },
          {
            name: "Psychiatrist",
            code: "ROLE_Psychiatrist",
            sortorder: 1,
          },
          {
            name: "clinical Team",
            code: "ROLE_Clinical",
            sortorder: 2,
          },
          {
            name: "Psychologist",
            code: "ROLE_Psychologist",
            sortorder: 3,
          },
          {
            name: "Therapist",
            code: "ROLE_Therapist",
            sortorder: 4,
          },
        ],
      },
      {
        name: "startPracticeDate",
        label: "Start Practice Date",
        type: "DATE",
        sw:"Tarehe ya Kuanza Mazoezi",
        show: true,
        isMandatory: true,
        sortorder: 7,
      },
      {
        name: "designation",
        label: "Designation",
        sw:"Uteuzi",
        isMandatory: true,
        type: "TEXT",
        show: true,
        sortorder: 10,
      },
      {
        name: "organisationunitId",
        label: "organisation Unique Number",
        type: "NUMBER",
        show: false,
        sortorder: 10,
        isMandatory: true,
        autofill: true,
      },
      // {
      //     "name": "aboutme",
      //     "label": "About me",
      //     "type": "LONG_TEXT",
      //     "isMandatory": false,
      //     "show": true,
      //     "sortorder": 8
      // },
      // {
      //     "name": "qualification",
      //     "label": "Qualification",
      //     "isMandatory": false,
      //     "type": "TEXT",
      //     "show": true,
      //     "sortorder": 9
      // },
      // {
      //     "name": "affiliation",
      //     "label": "Affiliation",
      //     "isMandatory": false,
      //     "type": "TEXT",
      //     "show": true,
      //     "sortorder": 10
      // },
      // {
      //     "name": "picturePath",
      //     "label": "Picture Path",
      //     "isMandatory": false,
      //     "type": "TEXT",
      //     "show": false,
      //     "sortorder": 11
      // },
      // {
      //     "name": "awardsandrecoginizations",
      //     "label": "Awards And Recoginizations",
      //     "type": "TEXT",
      //     "isMandatory": false,
      //     "show": true,
      //     "sortorder": 12
      // }
    ],
    DoctorAboutMe: [
      {
        name: "aboutme",
        label: "About Me",
        type: "LONG_TEXT",
        sw:"Kuhusu mimi",
        show: true,
        sortorder: 1,
        isMandatory: false,
      },
    ],
    DoctorPrice: [
      {
        name: "customprice",
        label: "Custom price",
        sw:"Bei maalum",
        id: "customprice",
        type: "NUMBER",
        show: true,
        sortorder: 1,
        isMandatory: false,
      },
      {
        name: "services",
        label: "Services",
        sw:"Bei maalum",
        type: "TEXT",
        show: true,
        sortorder: 2,
        isMandatory: false,
      },
      {
        name: "specialization",
        label: "Specialization",
        type: "MULTI CHECK BOX",
        sw:"Umaalumu",
        show: true,
        sortorder: 2,
        isMandatory: false,
        options: [
          {
            name: "Homeopathic medicine",
            code: 1,
            sortorder: 1,
            sw:"Dawa ya homeopathic"
          },
          {
            name: "General Surgeon",
            code: 2,
            sortorder: 2,
            sw:"Daktari Mkuu wa Upasuaji"
          },
          {
            name: "Nephrologist",
            code: 3,
            sortorder: 3,
            sw:"Nephrologist"
          },
          {
            name: "Dentist",
            code: 4,
            sortorder: 4,
            sw:"Daktari wa meno"
          },
          {
            name: "Cosmetologist",
            code: 5,
            sortorder: 5,
            sw:"Cosmetologist"
          },
          {
            name: "Cardiologist",
            code: 6,
            sortorder: 6,
            sw:"Daktari wa moyo"
          },
          {
            name: "Neurologist",
            code: 7,
            sortorder: 7,
            sw:"Daktari wa neva"
          },
          {
            name: "Pediatrician",
            code: 8,
            sortorder: 8,
            sw:"Daktari wa watoto"
          },
          {
            name: "Urologist",
            code: 9,
            sortorder: 9,
            sw:"Daktari wa mkojo"
          },
          {
            name: "Nutritionist",
            code: 10,
            sortorder: 10,
            sw:"Mtaalamu wa lishe"
          },
          {
            name: "Ophthalmologist",
            code: 11,
            sortorder: 11,
            sw:"Ophthalmologist"
          },
          {
            name: "Ayurvedic medicine",
            code: 12,
            sortorder: 12,
            sw:"Dawa ya Ayurvedic"
          },
          {
            name: "General Medicine",
            code: 13,
            sortorder: 13,
            sw:"Dawa ya Jumla"
          },
          {
            name: "Gynecologist",
            code: 14,
            sortorder: 14,
            sw:"Daktari wa magonjwa ya wanawake"
          },
          {
            name: "Pulmonologist",
            code: 15,
            sortorder: 15,
            sw:"Daktari wa Pulmonologist"
          },
          {
            name: "Dermatologist",
            code: 16,
            sortorder: 16,
            sw:"Daktari wa ngozi"
          },
          {
            name: "Orthopedic",
            code: 17,
            sortorder: 17,
            sw:"Mtaalamu wa Mifupa"
          },
          {
            name: "Endocrinologist",
            code: 18,
            sortorder: 18,
            sw:"Endocrinologist"
          },
          {
            name: "Gastroenterologist",
            code: 19,
            sortorder: 19,
            sw:"Gastroenterologist"
          },
          {
            name: "ENT",
            code: 20,
            sortorder: 20,
            sw:"ENT"
          },
          {
            name: "Psychiatrist",
            code: 21,
            sortorder: 21,
            sw:"Daktari wa magonjwa ya akili"
          },
          {
            name: "Sexologist",
            code: 22,
            sortorder: 22,
            sw:"Mtaalamu wa ngono"
          },
          {
            name: "Veterinary",
            code: 23,
            sortorder: 23,
            sw:"Daktari wa Mifugo"
          },
          {
            name: "Other",
            code: 24,
            sortorder: 24,
            sw:"Nyingine"
          },
        ],
      },
    ],
    DoctorEdu: [
      {
        name: "degree",
        label: "Degree",
        type: "TEXT",
        sw:"Shahada",
        show: true,
        sortorder: 1,
        isMandatory: false,
      },
      {
        name: "yearofCompletion",
        label: "Year of Completion",
        sw:"Mwaka wa Kukamilika",
        type: "TEXT",
        show: true,
        sortorder: 2,
        isMandatory: false,
      },
      {
        name: "collegeorInstitute",
        label: "College/Institute",
        sw:"Chuo/Taasisi",
        type: "TEXT",
        show: true,
        sortorder: 3,
        isMandatory: false,
      },
    ],
    DoctorExp: [
      {
        name: "hospital",
        label: "Hospital Name",
        sw:"Jina la Hospitali",
        type: "TEXT",
        show: true,
        sortorder: 1,
        isMandatory: false,
      },
      {
        name: "from",
        label: "From",
        sw:"Kutoka",
        type: "DATE",
        show: true,
        sortorder: 2,
        isMandatory: false,
      },
      {
        name: "to",
        label: "To",
        sw:"Kwa",
        type: "DATE",
        show: true,
        sortorder: 3,
        isMandatory: false,
      },
      {
        name: "designation",
        label: "Designation",
        sw:"Uteuzi",
        type: "TEXT",
        show: true,
        sortorder: 4,
        isMandatory: false,
      },
    ],
    DoctorAward: [
      {
        name: "awardsandrecoginizations",
        label: "Awards",
        sw:"Tuzo",
        type: "TEXT",
        show: true,
        sortorder: 1,
        isMandatory: false,
      },
    ],
    DoctorMember: [
      {
        name: "memberships",
        label: "Memberships",
        sw:"Uanachama",
        type: "TEXT",
        show: true,
        sortorder: 1,
        isMandatory: false,
      },
    ],
    DoctorSocial: [
      {
        name: "twitterURL",
        label: "Twitter",
        sw:"Twitter",
        type: "TEXT",
        show: true,
        sortorder: 1,
        isMandatory: false,
      },
      {
        name: "instagramURL",
        label: "Instagram",
        sw:"Instagram",
        type: "TEXT",
        show: true,
        sortorder: 2,
        isMandatory: false,
      },
      {
        name: "linkedinURL",
        label: "LinkedIn",
        sw:"LinkedIn",
        type: "TEXT",
        show: true,
        sortorder: 3,
        isMandatory: false,
      },
      {
        name: "youtubeURL",
        label: "Youtube",
        sw:"Youtube",
        type: "TEXT",
        show: true,
        sortorder: 4,
        isMandatory: false,
      },
      {
        name: "telegramURL",
        label: "Telegram",
        sw:"Telegram",
        type: "TEXT",
        show: true,
        sortorder: 4,
        isMandatory: false,
      },
      {
        name: "facebookURL",
        label: "Facebook",
        sw:"Facebook",
        type: "TEXT",
        show: true,
        sortorder: 4,
        isMandatory: false,
      },
      {
        name: "pinterestURL",
        label: "Pinterest",
        sw:"Pinterest",
        type: "TEXT",
        show: true,
        sortorder: 4,
        isMandatory: false,
      },
    ],
  },
  Services: {
    CIWA: {
      fields: [
      {
        name: "ciwa_date",
        label: "Date",
        sw:"Tarehe",
        type: "DATE",
        show: true,
        sortorder: 1,
        isMandatory: false,
      },
        {
          label: "Time",
          isMandatory: false,
          show: true,
          programId: 0,
          name: "ciwa_time",
          sortorder: 2,
          subType: "",
          sw: "Wakati",
          type: "TIME",
        },
        {
          label: "Pulse",
          isMandatory: false,
          show: true,
          programId: 0,
          name: "ciwa_pulse",
          sortorder: 3,
          subType: "",
          sw: "Mapigo ya moyo",
          type: "TEXT",
        },
        {
          label: "RR",
          isMandatory: false,
          show: true,
          programId: 0,
          name: "ciwa_RR",
          sortorder: 4,
          subType: "",
          sw: "RR",
          type: "TEXT",
        },
        {
          label: "O2 sat",
          isMandatory: false,
          show: true,
          programId: 0,
          name: "ciwa_O2sat",
          sortorder: 5,
          subType: "",
          sw: "O2 ameketi",
          type: "TEXT",
        },
        {
          label: "BP",
          isMandatory: false,
          show: true,
          programId: 0,
          name: "ciwa_BP",
          sortorder: 6,
          subType: "",
          sw: "BP",
          type: "TEXT",
        },
        {
          label: "Nausea/Vomiting - Rate on scale 0 - 7",
          id: 39,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_74",
              name: "0 - None",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_75",
              name: "1 - Mild nausea with no vomiting",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_76",
              name: "4 - Intermittent nausea",
              sortorder: 3,
              translations: [],
              totalscore:4
            },
            {
              code: "code_77",
              name: "7 - Constant nausea and frequent dry heaves and vomiting",
              sortorder: 4,
              translations: [],
              totalscore:7
            },
          ],
          programId: 0,
          name: "ciwa_nauseaorVomiting",
          sortorder: 7,
          subType: "",
          sw: "Kichefuchefu/Kutapika - Kiwango kwa kipimo 0 - 7",
          type: "SELECT",
        },
        {
          label:"Tremors - have patient extend arms & spread fingers fingers. Rate on scale 0 - 7",
          id: 40,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_79",
              name: "0 - No tremor",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_80",
              name: "1 - Not visible, but can be felt fingertip to fingertip",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_81",
              name: "4 - Moderate, with patient’s arms extended",
              sortorder: 3,
              translations: [],
              totalscore:4
            },
            {
              code: "code_82",
              name: "7 - severe, even w/ arms not extended",
              sortorder: 4,
              translations: [],
              totalscore:7
            },
          ],
          programId: 0,
          name: "ciwa_tremors",
          sortorder: 8,
          subType: "",
          sw: "Kutetemeka - kumpa mgonjwa mikono na kueneza vidole. Kadiria kwa kiwango 0 - 7",
          type: "SELECT",
        },
        {
          label: "Anxiety - Rate on scale 0 - 7",
          id: 41,
          isMandatory: true,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_84",
              name: "0 - no anxiety, patient at ease",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_85",
              name: "1 - mildly anxious",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_86",
              name: "4 - moderately anxious or guarded, so anxiety is inferred",
              sortorder: 3,
              translations: [],
              totalscore:4
            },
            {
              code: "code_87",
              name: "7 - equivalent to acute panic states seen in severe delirium or acute schizophrenic reactions",
              sortorder: 4,
              translations: [],
              totalscore:7
            },
          ],
          programId: 0,
          name: "ciwa_anxiety",
          sortorder: 9,
          subType: "",
          sw: "Wasiwasi - Kiwango kwa kiwango 0 - 7",
          type: "SELECT",
        },
        {
          label: "Agitation - Rate on scale 0 - 7",
          id: 42,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_89",
              name: "0 - normal activity",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_90",
              name: "1 - somewhat normal activity",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_91",
              name: "4 - moderately fidgety and restless",
              sortorder: 3,
              translations: [],
              totalscore:4
            },
            {
              code: "code_92",
              name: "7 - paces back and forth, or constantly thrashes about",
              sortorder: 4,
              translations: [],
              totalscore:7
            },
          ],
          programId: 0,
          name: "ciwa_agitation",
          sortorder: 10,
          subType: "",
          sw: "Msukosuko - Kadiria kwa mizani 0 - 7",
          type: "SELECT",
        },
        {
          label: "Paroxysmal Sweats - Rate on Scale 0 - 7.",
          id: 43,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_94",
              name: "0 - no sweats",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_95",
              name: "1- barely perceptible sweating, palms moist",
              sortorder: 2,
                translations: [],
                totalscore:1
            },
            {
              code: "code_96",
              name: "4 - beads of sweat obvious on forehead",
              sortorder: 3,
              translations: [],
              totalscore:4
            },
            {
              code: "code_97",
              name: "7 - drenching sweats",
              sortorder: 4,
              translations: [],
              totalscore:7
            },
          ],
          programId: 0,
          name: "ciwa_paroxysmalSweats",
          sortorder: 11,
          subType: "",
          sw: "Jasho la Paroxysmal - Kiwango kwa Mizani 0 - 7.",
          type: "SELECT",
        },
        {
          label:"Orientation and clouding of sensorium - Ask, What day is this? Where are you? Who am I? Rate scale 0 - 4",
          id: 44,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_99",
              name: "0 - Oriented",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_100",
              name: "1 – cannot do serial additions or is uncertain about date",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_101",
              name: "2 - disoriented to date by no more than 2 calendar days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_102",
              name: "3 - disoriented to date by more than 2 calendar days",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
            {
              code: "code_103",
              name: "4 - Disoriented to place and / or person",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
          ],
          programId: 0,
          name: "ciwa_orientationandsensorium",
          sortorder: 12,
          subType: "",
          sw: "Mwelekeo na mawingu ya sensorium - Uliza, Hii ​​ni siku gani? Uko wapi? Mimi ni nani? Kiwango cha 0 - 4",
          type: "SELECT",
        },
        {
          label:"Tactile disturbances - Ask, Have you experienced any itching, pins & needles sensation, burning or numbness, or a feeling of bugs crawling on or under your skin? ",
          id: 45,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_105",
              name: "0 - none",
              sortorder: 1,
              translations: [],
              totalscore:0              
            },
            {
              code: "code_106",
              name: "1 - very mild itching, pins & needles, burning, or numbness",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_107",
              name: "2 - mild itching, pins & needles, burning, or numbness",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_108",
              name: "3 - moderate itching, pins & needles, burning, or numbness",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
            {
              code: "code_109",
              name: "4 - moderate hallucinations",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_110",
              name: "5 - severe hallucinations",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
            {
              code: "code_111",
              name: "6 - extremely severe hallucinations",
              sortorder: 6,
              translations: [],
              totalscore:6
            },
            {
              code: "code_112",
              name: "7 - continuous hallucinations",
              sortorder: 7,
              translations: [],
              totalscore:7
            },
          ],
          programId: 0,
          name: "ciwa_tactiledisturbances",
          sortorder: 13,
          subType: "",
          sw: "Usumbufu wa kugusa - Uliza, Je, umekumbana na kuwashwa, pini na misikio ya sindano, kuungua au kufa ganzi, au kuhisi wadudu wakitambaa juu au chini ya ngozi yako?",
          type: "SELECT",
        },
        {
          label:"Auditory Disturbances - Ask, Are you more aware of sounds around you? Are they harsh? Do they startle you? Do you hear anything that disturbs you or that you know isn’t there? ",
          id: 46,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_114",
              name: "0 - not present",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_115",
              name: "1 - Very mild harshness or ability to startle",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_116",
              name: "2 - mild harshness or ability to startle",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_117",
              name: "3 - moderate harshness or ability to startle",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
            {
              code: "code_118",
              name: "4 - moderate hallucinations",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_119",
              name: "5 - severe hallucinations",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
            {
              code: "code_120",
              name: "6 - extremely severe hallucinations",
              sortorder: 6,
              translations: [],
              totalscore:6
            },
            {
              code: "code_121",
              name: "7 - continuous hallucinations",
              sortorder: 7,
              translations: [],
              totalscore:7
            },
          ],
          programId: 0,
          name: "ciwa_auditorydisturbances",
          sortorder: 14,
          subType: "",
          sw: "Usumbufu wa Masikio - Uliza, Je, unafahamu zaidi sauti zinazokuzunguka? Je, wao ni wakali? Je, wanakushtua? Je, unasikia kitu chochote kinachokusumbua au ambacho unajua hakipo?",
          type: "SELECT",
        },
        {
          label:"Visual disturbances - Ask, Does the light appear to be too bright? Is its color different than normal? Does it hurt your eyes? Are you seeing anything that disturbs you or that you know isn’t there? ",
          id: 47,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_123",
              name: "0 - not present",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_124",
              name: "1 - very mild sensitivity",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_125",
              name: "2 - mild sensitivity",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_126",
              name: "3 - moderate sensitivity",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
            {
              code: "code_127",
              name: "4 - moderate hallucinations",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_128",
              name: "5 - severe hallucinations",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
            {
              code: "code_129",
              name: "6 - extremely severe hallucinations",
              sortorder: 6,
              translations: [],
              totalscore:6
            },
            {
              code: "code_130",
              name: "7 - continuous hallucinations",
              sortorder: 7,
              translations: [],
              totalscore:6
            },
          ],
          programId: 0,
          name: "ciwa_visualdisturbances",
          sortorder: 15,
          subType: "",
          sw: "Usumbufu wa kuona - Uliza, Je, mwanga unaonekana kuwa mkali sana? Je, rangi yake ni tofauti na kawaida? Je, inaumiza macho yako? Je, unaona kitu chochote kinachokusumbua au ambacho unajua hakipo?",
          type: "SELECT",
        },
        {
          label:"Headache - Ask, Does your head feel different than usual? Does it feel like there is a band around your head? Do not rate dizziness or lightheadedness",
          id: 48,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_132",
              name: "0 - not present",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_133",
              name: "1 - very mild",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_134",
              name: "2 - mild",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_135",
              name: "3 - moderate",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
            {
              code: "code_136",
              name: "4 - moderately severe",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_137",
              name: "5 - severe",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
            {
              code: "code_138",
              name: "6 - very severe",
              sortorder: 6,
              translations: [],
              totalscore:6
            },
            {
              code: "code_139",
              name: "7 - extremely severe",
              sortorder: 7,
              translations: [],
              totalscore:7
            },
          ],
          programId: 0,
          name: "ciwa_headache",
          sortorder: 16,
          subType: "",
          sw: "Maumivu ya kichwa - Uliza, Je, kichwa chako kinahisi tofauti kuliko kawaida? Je, unahisi kama kuna bendi kichwani mwako? Usikadirie kizunguzungu au kichwa chepesi",
          type: "SELECT",
        },
        {
          label: "Total CIWA-Ar score:",
          id: 49,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "ciwa_totalScore",
          totalscore:true,
          id:"totalscore",
          sortorder: 17,
          subType: "",
          sw: "Jumla ya alama",
          type: "NUMBER",
        },
        {
          label:"Scale for Scoring : ",
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_1957",
              name: "0 – 9: absent or minimal withdrawal",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_1958",
              name: "10 – 19: mild to moderate withdrawal",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_1959",
              name: "more than 20: severe withdrawal",
              sortorder: 3,
              translations: [],
              totalscore:2
            }
          ],
          programId: 0,
          name: "ciwa_scalescoring",
          id:"ciwa_scalescoring",
          sortorder: 18,
          subType: "",
          sw: "Kiwango cha Kufunga",
          type: "SELECT",
        },
        {
          label: "PRN Med: Dose Given (mg):",
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "ciwa_PRNMED_dosegiven",
          sortorder: 19,
          subType: "",
          sw: "PRN Med: Dozi Imetolewa (mg)",
          type: "NUMBER",
        },
        {
          label:"PRN Med: Route:",
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "ciwa_route",
          sortorder: 20,
          subType: "",
          sw: "PRN Med: Njia : ",
          type: "TEXT",
        },
        {
          label: "Time of PRN medication administration:",
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "ciwa_time_of_PRN_admin",
          sortorder: 21,
          subType: "",
          sw: "Muda wa utawala wa dawa za PRN:",
          type: "TIME",
        },
        {
          label: "Assessment of response (CIWA-Ar score 30-60 minutes after medication administered) ",
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "ciwa_assessment_of_response",
          sortorder: 22,
          subType: "",
          sw: "Tathmini ya majibu (alama ya CIWA-Ar 30-60 dakika baada ya kuchukua dawa) ",
          type: "TEXT",
        },
        {
          label: "RN Initials ",
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "ciwa_RN_initials",
          sortorder: 23,
          subType: "",
          sw: "Mwanzo wa RN ",
          type: "TEXT",
        },
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 24,
          "type": "TEXT"
        }

      ],
      name: "CIWA",
      label: "Alcohol Withdrawal Assessment Scoring Guidelines (CIWA - Ar)",
      trans: [],
      header: "",
      sortorder: 1,
    },
    COWS: {
      fields: [
        {
          label: "INTERVAL",
          id: 50,
          isMandatory: true,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_141",
              name: "0",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_142",
              name: "30 mins",
              sortorder: 2,
              translations: [],
            },
            {
              code: "code_143",
              name: "2 hours",
              sortorder: 3,
              translations: [],
            },
            {
              code: "code_144",
              name: "4 hours",
              sortorder: 4,
              translations: [],
            },
          ],
          programId: 0,
          name: "cows_interval",
          sortorder: 1,
          subType: "",
          sw: "KIPINDI",
          type: "SELECT",
        },
        {
          label: "Date",
          id: 51,
          isMandatory: true,
          show: true,
          programId: 0,
          name: "cows_date",
          sortorder: 2,
          subType: "",
          sw: "Tarehe",
          type: "DATE",
        },
        {
          label: "Time",
          id: 52,
          isMandatory: true,
          show: true,
          programId: 0,
          name: "cows_time",
          sortorder: 3,
          subType: "",
          sw: "Wakati",
          type: "TIME",
        },
        {
          label:
            "Resting Heart Rate (measure after lying or sitting for 1 minute):",
          id: 53,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_146",
              name: "0 HR 80 or below",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_147",
              name: "1 HR 81-100",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_148",
              name: "2 HR 101-120",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_149",
              name: "4 HR greater than 120",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
          ],
          programId: 0,
          name: "cows_restingHeartRate",
          sortorder: 4,
          subType: "",
          sw: "Kiwango cha Moyo Kupumzika (pima baada ya kusema uwongo au kukaa kwa dakika 1):",
          type: "SELECT",
        },
        {
          label:
            "Sweating (preceding 30 minutes and not related to room temp /activity):",
          id: 54,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_151",
              name: "0 no report of chills or flushing",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_152",
              name: "1 subjective report of chills or flushing",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_153",
              name: "2 flushed or observable moistness on face",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_154",
              name: "3 beads of sweat on brow or face",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
            {
              code: "code_155",
              name: "4 sweat streaming off face",
              sortorder: 5,
              translations: [],
              totalscore:4
            },
          ],
          programId: 0,
          name: "cows_sweating",
          sortorder: 5,
          subType: "",
          sw: "Kutokwa jasho (dakika 30 zilizopita na haihusiani na joto la chumba / shughuli):",
          type: "SELECT",
        },
        {
          label: "Restlessness (observe during assessment):",
          id: 55,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_157",
              name: "0 able to sit still",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_158",
              name: "1 reports difficulty sitting still, but is able to do so",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_159",
              name: "3 frequent shifting or extraneous movements of legs/arms",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_160",
              name: "5 unable to sit still for more than a few seconds",
              sortorder: 4,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "cows_restlessness",
          sortorder: 6,
          subType: "",
          sw: "Kutotulia (tazama wakati wa tathmini):",
          type: "SELECT",
        },
        {
          label: "Pupil size:",
          id: 56,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_162",
              name: "0 pupils pinned or normal size for room light",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_163",
              name: "1 pupils possibly larger than normal for room light",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_164",
              name: "2 pupils moderately dilated",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_165",
              name: "5 pupils so dilated that only the rim of the iris is visible",
              sortorder: 4,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "cows_pupilsize",
          sortorder: 7,
          subType: "",
          sw: "Ukubwa wa mwanafunzi:",
          type: "SELECT",
        },
        {
          label: "Bone or joint aches (not including existing joint pains):",
          id: 57,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_167",
              name: "0 not present",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_168",
              name: "1 mild diffuse discomfort",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_169",
              name: "2 patient reports severe diffuse aching of joints/ muscles",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_170",
              name: "4 patient is rubbing joints / muscles plus unable to sit still due to discomfort",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
          ],
          programId: 0,
          name: "cows_boneorjointaches",
          sortorder: 8,
          subType: "",
          sw: "Maumivu ya mifupa au viungo (bila kujumuisha maumivu yaliyopo ya viungo):",
          type: "SELECT",
        },
        {
          label: "Runny nose or tearing (not related to URTI or allergies):",
          id: 58,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_172",
              name: "0 - not present",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_173",
              name: "1 nasal stuffiness or unusually moist eyes",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_174",
              name: "2 nose running or tearing",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_175",
              name: "4 nose constantly running or tears streaming down cheeks",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
          ],
          programId: 0,
          name: "cows_runnynoseortearing",
          sortorder: 9,
          subType: "",
          sw: "Kutokwa na pua au kupasuka (hakuhusiani na URTI au mizio):",
          type: "SELECT",
        },
        {
          label: "GI upset (over last 30 minutes):",
          id: 59,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_177",
              name: "0 no GI symptoms",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_178",
              name: "1 stomach cramps",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_179",
              name: "2 nausea or loose stool",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_180",
              name: "3 vomiting or diarrhoea",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
            {
              code: "code_181",
              name: "5 multiple episodes of vomiting or diarrhoea",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "cows_GIupset",
          sortorder: 10,
          subType: "",
          sw: "Shida za GI (zaidi ya dakika 30):",
          type: "SELECT",
        },
        {
          label: "Tremor (observe outstretched hands):",
          id: 60,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_183",
              name: "0 no tremor",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_184",
              name: "1 tremor can be felt, but not observed",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_185",
              name: "2 slight tremor observable",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_186",
              name: "4 gross tremor or muscle twitching",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
          ],
          programId: 0,
          name: "cows_tremor",
          sortorder: 11,
          subType: "",
          sw: "Kutetemeka (angalia mikono iliyonyooshwa):",
          type: "SELECT",
        },
        {
          label: "Yawning (observe during assessment):",
          id: 61,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_188",
              name: "0 no yawning",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_189",
              name: "1 yawning once or twice during assessment",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_190",
              name: "2 yawning three or more times during assessment",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_191",
              name: "4 yawning several times/minute",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
          ],
          programId: 0,
          name: "cows_yawning",
          sortorder: 12,
          subType: "",
          sw: "Kupiga miayo (angalia wakati wa tathmini):",
          type: "SELECT",
        },
        {
          label: "Anxiety or irritability",
          id: 62,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_193",
              name: "0 none",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_194",
              name: "1 patient reports increasing irritability or anxiousness",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_195",
              name: "2 patient obviously irritable or anxious",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_196",
              name: "4 Patient so irritable or anxious that participation in the assessment is difficult",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
          ],
          programId: 0,
          name: "cows_anxietyorirritability",
          sortorder: 13,
          subType: "",
          sw: "Wasiwasi au kuwashwa",
          type: "SELECT",
        },
        {
          label: "Gooseflesh skin",
          id: 63,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_198",
              name: "0 skin is smooth",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_199",
              name: "3 piloerection (goosebumps) of skin can be felt or hairs standing up on arms",
              sortorder: 2,
              translations: [],
              totalscore:3
            },
            {
              code: "code_200",
              name: "5 prominent piloerection",
              sortorder: 3,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "cows_goosefleshskin",
          sortorder: 14,
          subType: "",
          sw: "Ngozi ya gooseflesh",
          type: "SELECT",
        },
        {
          "label": "Total Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "totalscore",
          "sortorder": 15,
          totalscore:true,
          id:"totalscore",
          "type": "NUMBER"
        },
        {
          label: "SCORE INTERPRETATION:",
          id: "cows_socreInterpretation",
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_202",
              name: "5-12 = MILD",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_203",
              name: "13-24 = MODERATE",
              sortorder: 2,
              translations: [],
            },
            {
              code: "code_204",
              name: "25-36 = MODERATELY SEVERE",
              sortorder: 3,
              translations: [],
            },
            {
              code: "code_205",
              name: ">36 = SEVERE WITHDRAWAL",
              sortorder: 4,
              translations: [],
            },
          ],
          programId: 0,
          name: "cows_socreInterpretation",
          sortorder: 16,
          subType: "",
          sw: "UTAFSIRI WA Alama:",
          type: "SELECT",
        },
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 17,
          "type": "TEXT"
        }
      ],
      name: "COWS",
      label: "Clinical Opioid Withdrawal Scale (COWS)",
      trans: [],
      header: "",
      sortorder: 2,
    },
    GAD7: {
      fields: [
        {
          label: "Feeling nervous, anxious, or on edge",
          id: 66,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_207",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_208",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_209",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_210",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
          ],
          programId: 0,
          name: "gad7_feelingnervousanxiousoronedge",
          sortorder: 1,
          subType: "",
          sw: "Kuhisi woga, wasiwasi, au makali",
          type: "SELECT",
        },
        {
          label: "Not being able to stop or control worrying",
          id: 67,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_212",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_213",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_214",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_215",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
          ],
          programId: 0,
          name: "gad7_notbeingabletostoporcontrolworrying",
          sortorder: 2,
          subType: "",
          sw: "Kutokuwa na uwezo wa kuacha au kudhibiti wasiwasi",
          type: "SELECT",
        },
        {
          label: "Worrying too much about different things",
          id: 68,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_217",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_218",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_219",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_220",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
          ],
          programId: 0,
          name: "gad7_worryingtoomuchaboutdifferentthings",
          sortorder: 3,
          subType: "",
          sw: "Kuhangaika sana na mambo mbalimbali",
          type: "SELECT",
        },
        {
          label: "Trouble relaxing",
          id: 69,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_222",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_223",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_224",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_225",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
          ],
          programId: 0,
          name: "gad7_troublerelaxing",
          sortorder: 4,
          subType: "",
          sw: "Shida ya kupumzika",
          type: "SELECT",
        },
        {
          label: "Being so restless that it is hard to sit still",
          id: 70,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_227",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_228",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_229",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_230",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
          ],
          programId: 0,
          name: "gad7_beingsorestlessthatitishardtositstill",
          sortorder: 5,
          subType: "",
          sw: "Kutotulia kiasi kwamba ni vigumu kukaa tuli",
          type: "SELECT",
        },
        {
          label: "Becoming easily annoyed or irritable",
          id: 71,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_232",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_233",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_234",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_235",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
          ],
          programId: 0,
          name: "gad7_becomingeasilyannoyedorirritable",
          sortorder: 6,
          subType: "",
          sw: "Kukasirika au kukasirika kwa urahisi",
          type: "SELECT",
        },
        {
          label: "Feeling afraid, as if something awful might happen",
          id: 72,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_237",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_238",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_239",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_240",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
          ],
          programId: 0,
          name: "gad7_feelingafraidasifsomethingawfulmighthappen",
          sortorder: 7,
          subType: "",
          sw: "Kuhisi hofu, kana kwamba kitu kibaya kinaweza kutokea",
          type: "SELECT",
        },
        {
          label: "Total score",
          id: "totalscore",
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "gad7_totalScore",
          totalscore:true,
          sortorder: 8,
          subType: "",
          sw: "Jumla ya alama",
          type: "NUMBER",
        },
        {
          label:
            "If you checked any problems, how difficult have they made it for you to do your work, take care of things at home, or get along with other people? ",
          id: 74,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_242",
              name: "Not difficult at all",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_243",
              name: "Somewhat difficult",
              sortorder: 2,
              translations: [],
              totalscore:0
            },
            {
              code: "code_244",
              name: "Very difficult",
              sortorder: 3,
              translations: [],
              totalscore:0
            },
            {
              code: "code_245",
              name: "Extremely difficult",
              sortorder: 4,
              translations: [],
              totalscore:0
            },
          ],
          programId: 0,
          name: "gad7_howdifficulthavetheymade",
          sortorder: 9,
          subType: "",
          sw: "Ikiwa uliangalia matatizo yoyote, wamefanya iwe vigumu kwako kufanya kazi yako, kushughulikia mambo nyumbani, au kupatana na watu wengine?",
          type: "SELECT",
        },
        {
          label: "Scoring GAD-7 Anxiety Severity ",
          id: 75,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_247",
              name: "0–4: minimal anxiety",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_248",
              name: "5–9: mild anxiety",
              sortorder: 2,
              translations: [],
              totalscore:0
            },
            {
              code: "code_249",
              name: "10–14: moderate anxiety",
              sortorder: 3,
              translations: [],
              totalscore:0
            },
            {
              code: "code_250",
              name: "15–21: severe anxiety",
              sortorder: 4,
              translations: [],
              totalscore:0
            },
          ],
          programId: 0,
          name: "gad7_GAD7anxietyseverity",
          sortorder: 10,
          subType: "",
          sw: "Kufunga GAD-7 Ukali wa Wasiwasi",
          type: "SELECT",
        },
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 11,
          "type": "TEXT"
        }
      ],
      name: "GAD7",
      label: "GAD-7 Anxiety",
      trans: [],
      header:
        "Over the last two weeks, how often have you been bothered by the following problems?",
      sortorder: 3,
    },
    PAWSS: {
      fields: [
        {
          label:
            "Have you consumed any amount of alcohol (i.e., been drinking) with in the last 30 days OR did the patient have a + BAL on admission?",
          id: 76,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_252",
              name: "No",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_253",
              name: "Yes",
              sortorder: 2,
              translations: [],
              totalscore:0
            },
          ],
          programId: 0,
          name: "pawss_haveyouconsumedamountofalcohollast30days",
          sortorder: 1,
          subType: "",
          sw: "Je, umekunywa kiasi chochote cha pombe (yaani, umekunywa) kwa siku 30 zilizopita AU mgonjwa alikuwa na + BAL wakati wa kulazwa?",
          type: "SELECT",
        },
        {
          label:
            "Have you been recently intoxicated/drunk, within the last 30 days?",
          id: 77,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_255",
              name: "No",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_256",
              name: "Yes",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
          ],
          programId: 0,
          name: "pawss_haveyoubeenrecentlyintoxicated",
          sortorder: 2,
          subType: "",
          sw: "Je, umelewa/kunywa hivi karibuni, ndani ya siku 30 zilizopita?",
          type: "SELECT",
        },
        {
          label:
            "Have you ever undergone alcohol use disorder rehabilitation treatment or treatment for alcoholism? ",
          id: 78,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_258",
              name: "No",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_259",
              name: "Yes",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
          ],
          programId: 0,
          name: "pawss_haveyoueverundergonealcoholusedisorder",
          sortorder: 3,
          subType: "",
          sw: "Je, umewahi kupata matibabu ya kurekebisha tabia ya utumiaji pombe au matibabu ya ulevi?",
          type: "SELECT",
        },
        {
          label:
            "Have you an experienced any previous episodes of alcohol withdrawal, regardless of severity?",
          id: 79,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_261",
              name: "No",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_262",
              name: "Yes",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
          ],
          programId: 0,
          name: "pawss_haveyouanexperiencedalcoholwithdrawal",
          sortorder: 4,
          subType: "",
          sw: "Je! umepitia vipindi vyovyote vya awali vya uondoaji pombe, bila kujali ukali?",
          type: "SELECT",
        },
        {
          label: "Have you ever experienced blackouts?",
          id: 80,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_264",
              name: "No",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_265",
              name: "Yes",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
          ],
          programId: 0,
          name: "pawss_haveyoueverexperiencedblackouts",
          sortorder: 5,
          subType: "",
          sw: "Je, umewahi kukumbana na kukatika kwa umeme?",
          type: "SELECT",
        },
        {
          label: "Have you ever experienced alcohol withdrawal seizures?",
          id: 81,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_267",
              name: "No",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_268",
              name: "Yes",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
          ],
          programId: 0,
          name: "pawss_haveyoueverexperiencedalcoholwithdrawalseizures",
          sortorder: 6,
          subType: "",
          sw: "Je, umewahi kupata mshtuko wa kuacha pombe?",
          type: "SELECT",
        },
        {
          label: "Have you ever experienced delirium tremens or DT'S?",
          id: 82,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_270",
              name: "No",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_271",
              name: "Yes",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
          ],
          programId: 0,
          name: "pawss_haveyoueverexperienceddeliriumtremens",
          sortorder: 7,
          subType: "",
          sw: "Je, umewahi kukumbana na mtetemeko wa delirium au DTS?",
          type: "SELECT",
        },
        {
          label:
            "Have you combined alcohol with other downers like benzodiazepines or barbiturates, during the last 90 days?",
          id: 83,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_273",
              name: "No",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_274",
              name: "Yes",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
          ],
          programId: 0,
          name: "pawss_haveyoucombinedalcoholwithotherdowners",
          sortorder: 8,
          subType: "",
          sw: "Je, umechanganya pombe na vinywaji vingine kama vile benzodiazepines au barbiturates, katika siku 90 zilizopita?",
          type: "SELECT",
        },
        {
          label:
            "Have you combined alcohol with any other substance of abuse, during the last 90 days?",
          id: 84,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_276",
              name: "No",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_277",
              name: "Yes",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
          ],
          programId: 0,
          name: "pawss_haveyoucombinedalcoholsubstanceabuse",
          sortorder: 9,
          subType: "",
          sw: "Je, umechanganya pombe na dutu nyingine yoyote ya matumizi mabaya, katika siku 90 zilizopita?",
          type: "SELECT",
        },
        {
          label:
            "Was the patient's blood alcohol level BAL) on presentation >= 200?",
          id: 85,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_279",
              name: "No",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_280",
              name: "Yes",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
          ],
          programId: 0,
          name: "pawss_wasthepatientbloodalcohollevel",
          sortorder: 10,
          subType: "",
          sw: "Je, kiwango cha pombe katika damu ya mgonjwa kilikuwa BAL) kwenye uwasilishaji >= 200?",
          type: "SELECT",
        },
        {
          label:
            "Is there evidence of increased autonomic activity?(HR120 bpm, tremor, sweating, agitation,nausea)",
          id: 86,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_282",
              name: "No",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_283",
              name: "Yes",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
          ],
          programId: 0,
          name: "pawss_isthereevidenceofincreasedautonomic",
          sortorder: 11,
          subType: "",
          sw: "Je, kuna ushahidi wa kuongezeka kwa shughuli za kujiendesha? (HR120 bpm, tetemeko, jasho, fadhaa, kichefuchefu)",
          type: "SELECT",
        },
        {
          label: "Total score",
          id: "totalscore",
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "pawss_totalScore",
          sortorder: 12,
          totalscore:true,
          subType: "",
          sw: "Jumla ya alama",
          type: "NUMBER",
        },
        {
          label: "Screening Tool",
          id: "pawss_status",
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "pawss_status",
          sortorder: 12,
          subType: "",
          sw: "Chombo cha Kuchunguza",
          type: "SELECT",
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_497",
              name: "HIGH RISK",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_498",
              name: "LOW RISK",
              sortorder: 2,
              translations: [],
              totalscore:0
            },
          ]
        },
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 13,
          "type": "TEXT"
        }
      ],
      name: "PAWSS",
      label: "Predicton of Alcohol Withdrawal Severity Scale(PAWSS)",
      trans: [],
      header: "",
      sortorder: 4,
    },
    HealthQuestionnaire9: {
      fields: [
        {
          label: "Little interest or pleasure in doing things",
          id: 88,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0,
            },
            {
              code: "code_285",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0,
            },
            {
              code: "code_286",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1,
            },
            {
              code: "code_287",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2,
            },
            {
              code: "code_288",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3,
            },
          ],
          programId: 0,
          name: "health_littleInterest",
          sortorder: 1,
          subType: "",
          sw: "Nia ndogo au raha katika kufanya mambo",
          type: "SELECT",
        },
        {
          label: "Feeling down, depressed, or hopeless",
          id: 89,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore: 0,       
            },
            {
              code: "code_290",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore: 0,
            },
            {
              code: "code_291",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1,
            },
            {
              code: "code_292",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2,
            },
            {
              code: "code_293",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3,
            },
          ],
          programId: 0,
          name: "health_feelingdowndepressed",
          sortorder: 2,
          subType: "",
          sw: "Kuhisi huzuni, huzuni, au kutokuwa na tumaini",
          type: "SELECT",
        },
        {
          label: "Trouble falling or staying asleep, or sleeping too much",
          id: 90,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0,
            },
            {
              code: "code_295",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0,
            },
            {
              code: "code_296",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_297",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_298",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
          ],
          programId: 0,
          name: "health_troublefallingorstayingasleep",
          sortorder: 3,
          subType: "",
          sw: "Shida ya kuanguka au kukaa usingizi, au kulala sana",
          type: "SELECT",
        },
        {
          label: "Feeling tired or having little energy",
          id: 91,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0,
            },
            {
              code: "code_300",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0,
            },
            {
              code: "code_301",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_302",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_303",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3

            },
          ],
          programId: 0,
          name: "health_feelingtiredorhavinglittleenergy",
          sortorder: 4,
          subType: "",
          sw: "Kuhisi uchovu au kuwa na nguvu kidogo",
          type: "SELECT",
        },
        {
          label: "Poor appetite or overeating",
          id: 92,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0,
            },
            {
              code: "code_305",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_306",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_307",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_308",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
          ],
          programId: 0,
          name: "health_poorappetiteovereating",
          sortorder: 5,
          subType: "",
          sw: "Hamu mbaya au kula kupita kiasi",
          type: "SELECT",
        },
        {
          label:
            "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
          id: 93,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0,
            },
            {
              code: "code_310",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_311",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_312",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_313",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
          ],
          programId: 0,
          name: "health_feelingbadaboutyourself",
          sortorder: 6,
          subType: "",
          sw: "Kujisikia vibaya kuhusu wewe mwenyewe - au kwamba wewe ni kushindwa au kujishusha mwenyewe au familia yako",
          type: "SELECT",
        },
        {
          label:
            "Trouble concentrating on things, such as reading the newspaper or watching television",
          id: 94,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0,
            },
            {
              code: "code_315",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_316",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_317",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_318",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
          ],
          programId: 0,
          name: "health_troubleconcentratingonthings",
          sortorder: 7,
          subType: "",
          sw: "Shida ya kuzingatia mambo, kama vile kusoma gazeti au kutazama televisheni",
          type: "SELECT",
        },
        {
          label:
            "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
          id: 95,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0,
            },
            {
              code: "code_320",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_321",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_322",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_323",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
          ],
          programId: 0,
          name: "health_movingorspeakingsoslowly",
          sortorder: 8,
          subType: "",
          sw: "Kusonga au kuzungumza polepole sana kwamba watu wengine wangeweza kugundua? Au kinyume chake - kuwa na wasiwasi au kutokuwa na utulivu kwamba umekuwa ukizunguka sana kuliko kawaida",
          type: "SELECT",
        },
        {
          label:
            "Thoughts that you would be better off dead or of hurting yourself in some way",
          id: 96,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0,
            },
            {
              code: "code_325",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:0
            },
            {
              code: "code_326",
              name: "Several days",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_327",
              name: "More than half the days",
              sortorder: 3,
              translations: [],
              totalscore:2
            },
            {
              code: "code_328",
              name: "Nearly every day",
              sortorder: 4,
              translations: [],
              totalscore:3
            },
          ],
          programId: 0,
          name: "health_thoughtsthatyouwouldbebetteroffdead",
          sortorder: 9,
          subType: "",
          sw: "Mawazo kwamba afadhali ungekufa au kujiumiza kwa njia fulani",
          type: "SELECT",
        },
        {
          label: "Total score",
          id: "totalscore",
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "health_totalScore",
          totalscore:true,
          sortorder: 10,
          subType: "",
          sw: "Jumla ya alama",
          type: "NUMBER",
        },
        {
          label:
            "If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
          id: 98,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_330",
              name: "Not difficult at all",
              sortorder: 1,
              translations: [],
              totalscore:0,
            },
            {
              code: "code_331",
              name: "Somewhat difficult",
              sortorder: 2,
              translations: [],
              totalscore:0,
            },
            {
              code: "code_332",
              name: "Very difficults",
              sortorder: 3,
              translations: [],
              totalscore:0,
            },
            {
              code: "code_333",
              name: "Extremely difficulty",
              sortorder: 4,
              translations: [],
              totalscore:0,
            },
          ],
          programId: 0,
          name: "health_ifyoucheckedoffanyproblems",
          sortorder: 11,
          subType: "",
          sw: "Ikiwa ulitatua matatizo yoyote, je, matatizo haya yamefanya iwe vigumu kwako kufanya kazi yako, kushughulikia mambo nyumbani, au kupatana na watu wengine?",
          type: "SELECT",
        },
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 12,
          "type": "TEXT"
        }
      ],
      name: "HealthQuestionnaire9",
      label: "PATIENT HEALTH QUESTIONNAIRE-9 (PHQ-9)",
      trans: [],
      header:
        "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
      sortorder: 5,
    },
    MoodDisorderQuestionnaire: {
      fields: [
        // {
        //   label:
        //     "Has there ever been a period of time when you were not your usual self and ",
        //   id: 99,
        //   isMandatory: false,
        //   show: true,
        //   options: [],
        //   programId: 0,
        //   name: "mood_hasthereeverbeenperiodoftimewhenyou",
        //   sortorder: 1,
        //   subType: "",
        //   sw: "Je, kumewahi kuwa na kipindi ambacho haukuwa kawaida yako na",
        //   type: "TEXT",
        // },
        {
          label:
            "Has there ever been a period of time when you were not your usual self and you felt so good or so hyper that other people thought you were not your normal self or you were so hyper that you got into trouble?",
          id: 100,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_335",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_336",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_youfeltsogoodorsohyper",
          sortorder: 2,
          subType: "",
          sw: "ulijiskia vizuri sana hivi kwamba watu wengine wakafikiri wewe sio mtu wako wa kawaida au ulikuwa hyperhim hadi ukaingia kwenye matatizo?",
          type: "SELECT",
        },
        {
          label: "Has there ever been a period of time when you were not your usual self and you felt much more self-confident than usual?",
          id: 101,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_338",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_339",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_youfeltmuchmoreselfconfidentthanusual",
          sortorder: 3,
          subType: "",
          sw: "ulijisikia kujiamini zaidi kuliko kawaida?",
          type: "SELECT",
        },
        {
          label:
            "Has there ever been a period of time when you were not your usual self and you got much less sleep than usual and found you didn’t really miss it?",
          id: 102,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_341",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_342",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_yougotmuchlesssleepthanusual",
          sortorder: 4,
          subType: "",
          sw: "ulipata usingizi mchache sana kuliko kawaida na ukaona haukukosa kabisa?",
          type: "SELECT",
        },
        {
          label:
            "Has there ever been a period of time when you were not your usual self and you were much more talkative or spoke much faster than usual?",
          id: 103,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_344",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_345",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_youweremuchmoretalkative",
          sortorder: 5,
          subType: "",
          sw: "ulikuwa mzungumzaji zaidi au uliongea haraka kuliko kawaida?",
          type: "SELECT",
        },
        {
          label:
            "Has there ever been a period of time when you were not your usual self and thoughts raced through your head or you couldn’t slow your mind down?",
          id: 104,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_347",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_348",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_thoughtsracedthroughyourhead",
          sortorder: 6,
          subType: "",
          sw: "mawazo yalipita kichwani mwako au hukuweza kupunguza akili yako?",
          type: "SELECT",
        },
        {
          label:
            "Has there ever been a period of time when you were not your usual self and you were so easily distracted by things around you that you had trouble concentrating or staying on track?",
          id: 105,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_350",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_351",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_youweresoeasilydistracted",
          sortorder: 7,
          subType: "",
          sw: "ulikengeushwa kwa urahisi na vitu vilivyokuzunguka hivi kwamba ulikuwa na shida ya kuzingatia au kubaki kwenye njia?",
          type: "SELECT",
        },
        {
          label: "Has there ever been a period of time when you were not your usual self and you had much more energy than usual?",
          id: 106,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_353",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_354",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_youhadmuchmoreenergy",
          sortorder: 8,
          subType: "",
          sw: "ulikuwa na nguvu nyingi kuliko kawaida?",
          type: "SELECT",
        },
        {
          label:
            "Has there ever been a period of time when you were not your usual self and you were much more active or did many more things than usual?",
          id: 107,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_356",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_357",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_youweremuchmoreactive",
          sortorder: 9,
          subType: "",
          sw: "ulikuwa hai zaidi au ulifanya mambo mengi zaidi ya kawaida?",
          type: "SELECT",
        },
        {
          label:
            "Has there ever been a period of time when you were not your usual self and you were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?",
          id: 108,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_359",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_360",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_youweremuchmoresocial",
          sortorder: 10,
          subType: "",
          sw: "ulikuwa wa kijamii zaidi au wa nje kuliko kawaida, kwa mfano, uliwapigia simu marafiki katikati ya usiku?",
          type: "SELECT",
        },
        {
          label: "Has there ever been a period of time when you were not your usual self and  you were much more interested in sex than usual?",
          id: 109,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_362",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_363",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_youweremuchmoreinterestedinsex",
          sortorder: 11,
          subType: "",
          sw: "ulivutiwa zaidi na ngono kuliko kawaida?",
          type: "SELECT",
        },
        {
          label:
            "Has there ever been a period of time when you were not your usual self and you did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?",
          id: 110,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_365",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_366",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_youdidthingsthatwereunusualforyou",
          sortorder: 12,
          subType: "",
          sw: "ulifanya mambo ambayo hayakuwa ya kawaida kwako au ambayo huenda watu wengine walifikiri yalikuwa ya kupita kiasi, ya kipumbavu, au hatari?",
          type: "SELECT",
        },
        {
          label: "Has there ever been a period of time when you were not your usual self and spending money got you or your family into trouble?",
          id: 112,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_371",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_372",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_spendingmoney",
          sortorder: 13,
          subType: "",
          sw: "matumizi ya pesa yalikuingiza wewe au familia yako kwenye matatizo?",
          type: "SELECT",
        },
        {
          label:
            "If you checked YES to more than one of the above, have several of these ever happened during the same period of time?",
          id: 113,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_374",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_375",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_haveseveraloftheseeverhappened",
          sortorder: 15,
          subType: "",
          sw: "Ikiwa umechagua NDIYO kwa zaidi ya moja kati ya zilizo hapo juu, je, kadhaa kati ya hizi zimewahi kutokea katika kipindi sawa cha wakati?",
          type: "SELECT",
        },
        {
          label:
            "How much of a problem did any of these cause you – like being unable to work having family, money or legal troubles getting into arguments or fights?",
          id: 114,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_377",
              name: "No Problem",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_378",
              name: "Minor Problem",
              sortorder: 2,
              translations: [],
            },
            {
              code: "code_379",
              name: "Moderate Problem",
              sortorder: 3,
              translations: [],
            },
            {
              code: "code_380",
              name: "Serious Problem",
              sortorder: 4,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_howmuchofaproblemdidanyofthesecauseyou",
          sortorder: 16,
          subType: "",
          sw: "Ni shida ngapi kati ya hizi ilikusababishia - kama vile kutoweza kufanya kazi kuwa na familia, pesa au shida za kisheria kuingia kwenye mabishano au mapigano?",
          type: "SELECT",
        },
        {
          label:
            "Have any of your blood relatives (i.e. children, siblings, parents, grandparents, aunts, uncles) had manic-depressive illness or bipolar disorder?",
          id: 115,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_382",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_383",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_haveanyofyourbloodrelatives",
          sortorder: 17,
          subType: "",
          sw: "Je, kuna yeyote kati ya jamaa zako wa damu (yaani watoto, ndugu, wazazi, babu na nyanya, shangazi, wajomba) alikuwa na ugonjwa wa mfadhaiko wa akili au ugonjwa wa bipolar?",
          type: "SELECT",
        },
        {
          label:
            "Has a health professional ever told you that you have manic-depressive illness or bipolar disorder?",
          id: 116,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_385",
              name: "Yes",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_386",
              name: "No",
              sortorder: 2,
              translations: [],
            },
          ],
          programId: 0,
          name: "mood_healthprofessionalevertoldmanicdepressive",
          sortorder: 18,
          subType: "",
          sw: "Je, mtaalamu wa afya amewahi kukuambia kwamba una ugonjwa wa kufadhaika wa akili au ugonjwa wa msongo wa mawazo?",
          type: "SELECT",
        },
        {
          label: "Bipolar Spectrum Disorder",
          id: 117,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "mood_MDQBipolarDisorder",
          sortorder: 19,
          subType: "",
          sw: "Ugonjwa wa Spectrum ya Bipolar",
          type: "SELECT",
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
            },
            {
              code: "code_252",
              name: "No",
              sortorder: 1,
              translations: [],
            },
            {
              code: "code_253",
              name: "Yes",
              sortorder: 2,
              translations: [],
            }
          ]
        },
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 20,
          "type": "TEXT"
        }
      ],
      name: "MoodDisorderQuestionnaire",
      label: "THE MOOD DISORDER QUESTIONNAIRE",
      trans: [],
      header:
        "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
      sortorder: 6,
    },
    PTSDCheckList: {
      fields: [
        {
          label:
            "Repeated, disturbing memories, thoughts, or images of a stressful experience from the past?",
          id: 118,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_388",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_389",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_390",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_391",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_392",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_repeateddisturbingmemories",
          sortorder: 1,
          subType: "",
          sw: "Kumbukumbu zinazorudiwa, zinazosumbua, mawazo, au picha za uzoefu wa mkazo kutoka zamani?",
          type: "SELECT",
        },
        {
          label:
            "Repeated, disturbing dreams of a stressful experience from the past?",
          id: 119,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_394",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
             
            },
            {
              code: "code_395",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_396",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_397",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_398",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_repeateddisturbingdreams",
          sortorder: 2,
          subType: "",
          sw: "Ndoto zinazorudiwa, zinazosumbua za uzoefu wa shida kutoka zamani?",
          type: "SELECT",
        },
        {
          label:
            "Suddenly acting or feeling as if a stressful experience were happening again (as if you were reliving it)?",
          id: 120,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_400",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_401",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_402",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_403",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:5
            },
            {
              code: "code_404",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_suddenlyactingorfeelingstressful",
          sortorder: 3,
          subType: "",
          sw: "Kutenda kwa ghafla au kuhisi kana kwamba tukio lenye mkazo lilikuwa likitokea tena (kana kwamba unakumbushia)?",
          type: "SELECT",
        },
        {
          label:
            "Feeling very upset when something reminded you of a stressful experience from the past?",
          id: 121,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_406",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_407",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_408",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_409",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_410",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_feelingveryupsetwhensomething",
          sortorder: 4,
          subType: "",
          sw: "Je! unahisi kukasirika sana wakati kitu kilikukumbusha uzoefu wa mkazo kutoka zamani?",
          type: "SELECT",
        },
        {
          label:
            "Having physical reactions (e.g., heart pounding,trouble breathing, or sweating) when something reminded you of a stressful experience from the past?",
          id: 122,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_412",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_413",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_414",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_415",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_416",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_havingphysicalreactionsstressful",
          sortorder: 5,
          subType: "",
          sw: "Je, una hisia za kimwili (k.m., kupiga moyo, kupumua kwa shida, au kutokwa na jasho) wakati kitu kilikukumbusha kuhusu hali ya mkazo ya zamani?",
          type: "SELECT",
        },
        {
          label:
            "Avoid thinking about or talking about a stressful experience from the past or avoid having feelings related to it?",
          id: 123,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_418",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_419",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_420",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_421",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_422",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_avoidthinkingaboutortalkingaboutastressful",
          sortorder: 6,
          subType: "",
          sw: "Je, uepuke kufikiria au kuzungumza juu ya tukio lenye mkazo kutoka zamani au epuka kuwa na hisia zinazohusiana nalo?",
          type: "SELECT",
        },
        {
          label:
            "Avoid activities or situations because they remind you of a stressful experience from the past?",
          id: 124,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_424",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_425",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_426",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_427",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_428",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_avoidactivitiesorsituations",
          sortorder: 7,
          subType: "",
          sw: "Epuka shughuli au hali kwa sababu zinakukumbusha uzoefu wa mkazo kutoka zamani?",
          type: "SELECT",
        },
        {
          label:
            "Trouble remembering important parts of a stressful experience from the past?",
          id: 125,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "code_429",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_430",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_431",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_432",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_433",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_434",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_troublerememberingimportantparts",
          sortorder: 8,
          subType: "",
          sw: "Je, unatatizika kukumbuka sehemu muhimu za hali ya mkazo kutoka zamani?",
          type: "SELECT",
        },
        {
          label: "Loss of interest in things that you used to enjoy?",
          id: 126,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "code_435",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_436",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_437",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_438",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_439",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_440",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_lossofinterestinthingsthatyouusedtoenjoy",
          sortorder: 9,
          subType: "",
          sw: "Je, umepoteza hamu ya mambo uliyokuwa ukifurahia?",
          type: "SELECT",
        },
        {
          label: "Feeling distant or cut off from other people?",
          id: 127,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_442",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_443",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_444",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_445",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_446",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_feelingdistantorcutofffromotherpeople",
          sortorder: 10,
          subType: "",
          sw: "Kuhisi kuwa mbali au kutengwa na watu wengine?",
          type: "SELECT",
        },
        {
          label:
            "Feeling emotionally numb or being unable to have loving feelings for those close to you?",
          id: 128,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_448",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_449",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_450",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_451",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_452",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_feelingemotionallynumborbeingunable",
          sortorder: 11,
          subType: "",
          sw: "Je, unajisikia ganzi kihisia au kushindwa kuwa na hisia za upendo kwa watu wako wa karibu?",
          type: "SELECT",
        },
        {
          label: "Feeling as if your future will somehow be cut short?",
          id: 129,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_454",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_455",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_456",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_457",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_458",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_feelingasifyourfuturewillsomehowbecutshort",
          sortorder: 12,
          subType: "",
          sw: "Je! unahisi kama wakati wako ujao utakatizwa kwa njia fulani?",
          type: "SELECT",
        },
        {
          label: "Trouble falling or staying asleep?",
          id: 130,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_460",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_461",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_462",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_463",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_464",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_troublefallingorstayingasleep",
          sortorder: 13,
          subType: "",
          sw: "Je, una matatizo ya kuanguka au kulala?",
          type: "SELECT",
        },
        {
          label: "Feeling irritable or having angry outbursts?",
          id: 131,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_466",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_467",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_468",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_469",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_470",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_feelingirritableorhavingangryoutbursts",
          sortorder: 14,
          subType: "",
          sw: "Kuhisi kukasirika au kuwa na milipuko ya hasira?",
          type: "SELECT",
        },
        {
          label: "Having difficulty concentrating?",
          id: 132,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_472",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_473",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_474",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_475",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_476",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_Havingdifficultyconcentrating",
          sortorder: 15,
          subType: "",
          sw: "Je, una ugumu wa kuzingatia?",
          type: "SELECT",
        },
        {
          label: "Being super alert or watchful on guard?",
          id: 133,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_478",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_479",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:1
            },
            {
              code: "code_480",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_481",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_482",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_beingsuperalertorwatchfulonguard",
          sortorder: 16,
          subType: "",
          sw: "Je, upo macho sana au ukiwa macho?",
          type: "SELECT",
        },
        {
          label: "Feeling jumpy or easily startled?",
          id: 134,
          isMandatory: false,
          show: true,
          options: [
            {
              code: "",
              name: "Select your",
              sortorder: 0,
              translations: [],
              totalscore:0
            },
            {
              code: "code_484",
              name: "Not at all",
              sortorder: 1,
              translations: [],
              totalscore:1
            },
            {
              code: "code_485",
              name: "A little bit",
              sortorder: 2,
              translations: [],
              totalscore:2
            },
            {
              code: "code_486",
              name: "Moderately",
              sortorder: 3,
              translations: [],
              totalscore:3
            },
            {
              code: "code_487",
              name: "Quite a bit",
              sortorder: 4,
              translations: [],
              totalscore:4
            },
            {
              code: "code_488",
              name: "Extremely",
              sortorder: 5,
              translations: [],
              totalscore:5
            },
          ],
          programId: 0,
          name: "PTSD_feelingjumpyoreasilystartled",
          sortorder: 17,
          subType: "",
          sw: "Je! unahisi kurukaruka au kushtuka kwa urahisi?",
          type: "SELECT",
        },
        {
          label: "Total Severity Score",
          id: "totalscore",
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "PTSD_totalScore",
          totalscore:true,
          sortorder: 18,
          subType: "",
          sw: "Jumla ya alama",
          type: "NUMBER",
        },
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 19,
          "type": "TEXT"
        }
      ],
      name: "PTSDCheckList",
      label: "PTSD CheckList – Civilian Version (PCL-C)",
      trans: [],
      header:
        "Has there ever been a period of time when you were not your usual self and",
      sortorder: 7,
    },
    CIF: {
      fields: [
        {
          label: "Presenting Problem/Reason for Visit",
          id: 136,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "CIF_reasonforvisit",
          sortorder: 1,
          subType: "",
          sw: "Kuwasilisha Tatizo/Sababu ya Kutembelewa",
          type: "LONG_TEXT",
        },
        {
          label: "History of Presenting Problem",
          id: 137,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "CIF_historyofPresentingProblem",
          sortorder: 2,
          subType: "",
          sw: "Historia ya Kuwasilisha Tatizo",
          type: "LONG_TEXT",
        },
        {
          label: "Past Medical and Surgical History",
          id: 138,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "CIF_pastmedicalandsurgicalhistory",
          sortorder: 3,
          subType: "",
          sw: "Historia ya Zamani ya Matibabu na Upasuaji",
          type: "LONG_TEXT",
        },
        {
          label: "Pre/Current Medication",
          id: 139,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "CIF_preorcurrentmedication",
          sortorder: 4,
          subType: "",
          sw: "Dawa ya Kabla/ya Sasa",
          type: "LONG_TEXT",
        },
        {
          label: "Review of Systems",
          id: 140,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "CIF_reviewofsystems",
          sortorder: 5,
          subType: "",
          sw: "Mapitio ya Mifumo",
          type: "LONG_TEXT",
        },
        {
          label: "Personal Psychiatric History",
          id: 141,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "CIF_PH_personalhistory",
          sortorder: 6,
          subType: "",
          sw: "Historia ya Kisaikolojia ya Kibinafsi",
          type: "LONG_TEXT",
        },
        {
          label: "Family Psychiatric History",
          id: 142,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "CIF_PH_Familyhistory",
          sortorder: 7,
          subType: "",
          sw: "Historia ya Saikolojia ya Familia",
          type: "LONG_TEXT",
        },
        {
          label: "Family Composition and Social History",
          id: 143,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "CIF_GEN_familycomposition",
          sortorder: 8,
          subType: "",
          sw: "Muundo wa Familia na Historia ya Kijamii",
          type: "LONG_TEXT",
        },
        {
          label: "Developmental History",
          id: 144,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "CIF_GEN_developmentalhistory",
          sortorder: 9,
          subType: "",
          sw: "Historia ya Maendeleo",
          type: "LONG_TEXT",
        },
        {
          label: "Personal and Social History",
          id: 145,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "CIF_GEN_personalandsocialhistory",
          sortorder: 10,
          subType: "",
          sw: "Historia ya Kibinafsi na Kijamii",
          type: "LONG_TEXT",
        },
        {
          label: "Forensic History",
          id: 146,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "CIF_GEN_forensichistory",
          sortorder: 11,
          subType: "",
          sw: "Historia ya Uchunguzi",
          type: "LONG_TEXT",
        },
        {
          label: "Pre-morbid History",
          id: 147,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "CIF_GEN_premorbidhistory",
          sortorder: 12,
          subType: "",
          sw: "Historia ya kabla ya ugonjwa",
          type: "LONG_TEXT",
        },
        {
          label: "Collaborative/Collateral History",
          id: 148,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "CIF_GEN_collaborativeorcollateralhistory",
          sortorder: 13,
          subType: "",
          sw: "Historia ya Ushirikiano/Dhamana",
          type: "LONG_TEXT",
        },
        {
          label: "Vegetative History",
          id: 149,
          isMandatory: false,
          show: true,
          options: [],
          programId: 0,
          name: "CIF_GEN_vegetativehistory",
          sortorder: 14,
          subType: "",
          sw: "Historia ya Mboga",
          type: "LONG_TEXT",
        },
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 15,
          "type": "TEXT"
        },
        {
          "label": "Summary1",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 16,
          "type": "TEXT"
        }
      ],
      name: "CIF",
      label: "CLINICAL INTAKE FORM",
      trans: [],
      header: "",
      sortorder: 8,
      subform:{
        SUH:{
          name: "SUH",
          label: "Substance Use History",
          isRepeat:true,
          trans: [],
          header: "",
          fields: [
            {
              label: "Substance",
              isMandatory: false,
              show: true,
              options: [
                {
                  code: "",
                  name: "Select your",
                  sortorder: 0,
                  translations: [],
                  totalscore:0
                },
                {
                  code: "code_490",
                  name: "Alcohol",
                  sortorder: 1,
                  translations: [],
                  totalscore:0
                },
                {
                  code: "code_485",
                  name: "Tobacco",
                  sortorder: 2,
                  translations: [],
                  totalscore:0
                },
                {
                  code: "code_486",
                  name: "Marijuana",
                  sortorder: 3,
                  translations: [],
                  totalscore:0
                },
                {
                  code: "code_487",
                  name: "Opioids",
                  sortorder: 4,
                  translations: [],
                  totalscore:0
                },
                {
                  code: "code_488",
                  name: "Benzodiazepines",
                  sortorder: 5,
                  translations: [],
                  totalscore:0
                },
                {
                  code: "code_488",
                  name: "Stimulants",
                  sortorder: 6,
                  translations: [],
                  totalscore:0
                },
                {
                  code: "code_488",
                  name: "Other",
                  sortorder: 7,
                  translations: [],
                  totalscore:0
                }
              ],
              programId: 0,
              name: "SUH_substance",
              sortorder: 1,
              subType: "",
              sw: "Dawa",
              type: "SELECT",
            },
            {
              label: "First use",
              isMandatory: false,
              show: true,
              programId: 0,
              name: "SUH_firstuse",
              sortorder: 2,
              subType: "",
              sw: "Matumizi ya kwanza",
              type: "TEXT",
            },
            {
              label: "Last use",
              isMandatory: false,
              show: true,
              programId: 0,
              name: "SUH_lastuse",
              sortorder: 3,
              subType: "",
              sw: "Matumizi ya mwisho",
              type: "TEXT",
            },
            {
              label: "Amount",
              isMandatory: false,
              show: true,
              programId: 0,
              name: "SUH_amount",
              sortorder: 4,
              subType: "",
              sw: "Kiasi",
              type: "NUMBER",
            },
            {
              label: "Frequency",
              isMandatory: false,
              show: true,
              programId: 0,
              name: "SUH_frequency",
              sortorder: 5,
              subType: "",
              sw: "Mzunguko",
              type: "TEXT",
            },
            {
              label: "Route",
              isMandatory: false,
              show: true,
              programId: 0,
              name: "SUH_route",
              sortorder: 6,
              subType: "",
              sw: "Njia",
              type: "TEXT",
            }
          ],
          sortorder: 1,
        }

      }
    },
    "SRAC": {
      "fields": [
        {
          "label": "Frequency: ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_frequency",
          "sortorder": 1,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Hourly",
              "sortorder": 1,
              "code": "code_497"
            },
            {
              "name": "Daily ",
              "sortorder": 2,
              "code": "code_498"
            },
            {
              "name": "Weekly ",
              "sortorder": 3,
              "code": "code_499"
            },
            {
              "name": "Monthly",
              "sortorder": 4,
              "code": "code_500"
            }
          ]
        },
        {
          "label": "Intensity right now: ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_intensityrightnow",
          "sortorder": 2,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Low",
              "sortorder": 1,
              "code": "code_501"
            },
            {
              "name": "1",
              "sortorder": 2,
              "code": "code_502"
            },
            {
              "name": "2",
              "sortorder": 3,
              "code": "code_503"
            },
            {
              "name": "3",
              "sortorder": 4,
              "code": "code_504"
            },
            {
              "name": "4",
              "sortorder": 5,
              "code": "code_505"
            },
            {
              "name": "5",
              "sortorder": 6,
              "code": "code_506"
            },
            {
              "name": "6",
              "sortorder": 7,
              "code": "code_507"
            },
            {
              "name": "7",
              "sortorder": 8,
              "code": "code_508"
            },
            {
              "name": "8",
              "sortorder": 9,
              "code": "code_509"
            },
            {
              "name": "9",
              "sortorder": 10,
              "code": "code_510"
            },
            {
              "name": "10",
              "sortorder": 11,
              "code": "code_511"
            },
            {
              "name": "High",
              "sortorder": 12,
              "code": "code_512"
            }
          ]
        },
        {
          "label": "How bad does it get?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_Howbaddoesitget",
          "sortorder": 3,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Manageable",
              "sortorder": 1,
              "code": "code_513"
            },
            {
              "name": "1",
              "sortorder": 2,
              "code": "code_514"
            },
            {
              "name": "2",
              "sortorder": 3,
              "code": "code_515"
            },
            {
              "name": "3",
              "sortorder": 4,
              "code": "code_516"
            },
            {
              "name": "4",
              "sortorder": 5,
              "code": "code_517"
            },
            {
              "name": "5",
              "sortorder": 6,
              "code": "code_518"
            },
            {
              "name": "6",
              "sortorder": 7,
              "code": "code_519"
            },
            {
              "name": "7",
              "sortorder": 8,
              "code": "code_520"
            },
            {
              "name": "8",
              "sortorder": 9,
              "code": "code_521"
            },
            {
              "name": "9",
              "sortorder": 10,
              "code": "code_522"
            },
            {
              "name": "10",
              "sortorder": 11,
              "code": "code_523"
            },
            {
              "name": "Unbearable",
              "sortorder": 12,
              "code": "code_524"
            }
          ]
        },
        {
          "label": "Critical event(s)/trigger(s):",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_criticalEventTrigger",
          "sortorder": 4,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_525"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_526"
            }
          ]
        },
        {
          "label": "If yes, describe",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_criticalEventYesDescribe",
          "sortorder": 5,
          "type": "TEXT"
        },
        {
          "label": "Prior suicidal thoughts ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_priorsuicidalthoughts",
          "sortorder": 6,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_527"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_528"
            }
          ]
        },
        {
          "label": "If yes, describe",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_priorsuicidalDescribe",
          "sortorder": 7,
          "type": "TEXT"
        },
        {
          "label": "Prior suicide attempt ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_priorSuicideAttempt",
          "sortorder": 8,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_529"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_530"
            }
          ]
        },
        {
          "label": "If yes, describe",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_priorSuicideAttemptDescribe",
          "sortorder": 9,
          "type": "TEXT"
        },
        {
          "label": "Current plan ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_currentPlan",
          "sortorder": 10,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_531"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_532"
            }
          ]
        },
        {
          "label": "Timeline and means:",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_timelineAndMeans",
          "sortorder": 11,
          "type": "TEXT"
        },
        {
          "label": "Access to means / method ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_accessToMeans",
          "sortorder": 12,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_533"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_534"
            }
          ]
        },
        {
          "label": "Client lives alone ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_clientLivesAlone",
          "sortorder": 13,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_535"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_536"
            }
          ]
        },
        {
          "label": "Client reports anger toward others",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_clientReportsAngerTowardOthers",
          "sortorder": 14,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_537"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_538"
            }
          ]
        },
        {
          "label": "Client reports indifference / apathy ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_clientReportsIndifference",
          "sortorder": 15,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_539"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_540"
            }
          ]
        },
        {
          "label": "Client has been giving away",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_clientHasBeenGivingAwayPossessions",
          "sortorder": 16,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_541"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_542"
            }
          ]
        },
        {
          "label": "possessions",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_substanceAbuseDisclosed",
          "sortorder": 17,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_543"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_544"
            }
          ]
        },
        {
          "label": "Substance abuse disclosed ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_depressiveSymptomsEvident",
          "sortorder": 18,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_545"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_546"
            }
          ]
        },
        {
          "label": "Depressive symptoms evident",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_historyOfSuicideByFriend",
          "sortorder": 19,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_547"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_548"
            }
          ]
        },
        {
          "label": "History of suicide by friend / family member",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_expressesUnbearableHopelessness",
          "sortorder": 20,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_549"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_550"
            }
          ]
        },
        {
          "label": "Direct statement of intent to suicide ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_indirectStatementsOfIntentToSuicide",
          "sortorder": 21,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_551"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_552"
            }
          ]
        },
        {
          "label": "Expresses unbearable hopelessness  ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_directStatementOfIntentToSuicide",
          "sortorder": 22,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_553"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_554"
            }
          ]
        },
        {
          "label": "Indirect statements of intent to suicide",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_recentLossOfLovedOne",
          "sortorder": 23,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_555"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_556"
            }
          ]
        },
        {
          "label": "Recent loss of loved one  ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_healthIssues",
          "sortorder": 24,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_557"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_558"
            }
          ]
        },
        {
          "label": "Health issues ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_impulsivity",
          "sortorder": 25,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_559"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_560"
            }
          ]
        },
        {
          "label": "Impulsivity  ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_rigidThinking",
          "sortorder": 26,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_561"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_562"
            }
          ]
        },
        {
          "label": "Rigid thinking (inflexible / lack of openness)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_recentStressfulEvents",
          "sortorder": 27,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_563"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_564"
            }
          ]
        },
        {
          "label": "Recent stressful events  ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_lackOfSenseOfBelongingness",
          "sortorder": 28,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_565"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_566"
            }
          ]
        },
        {
          "label": "Lack of sense of belongingness  ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_nothingSeemsGoodEnoughAnyMore",
          "sortorder": 29,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_567"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_568"
            }
          ]
        },
        {
          "label": "Nothing seems good eugh any more",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_lossOfFamiliarEnvironmentConnections",
          "sortorder": 30,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_569"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_570"
            }
          ]
        },
        {
          "label": "Loss of familiar environment / connections",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_currentCrisis",
          "sortorder": 31,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_571"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_572"
            }
          ]
        },
        {
          "label": "Current crisis  ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_familyProblems",
          "sortorder": 32,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_573"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_574"
            }
          ]
        },
        {
          "label": "Family problems (particularly if longstanding)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_recentRelationshipBreakup",
          "sortorder": 33,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_575"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_576"
            }
          ]
        },
        {
          "label": "Recent relationship breakup  ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_LGBTQIssues",
          "sortorder": 34,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_577"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_578"
            }
          ]
        },
        {
          "label": "LGBTQ issues ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "beingBullied",
          "sortorder": 35,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_579"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_580"
            }
          ]
        },
        {
          "label": "Being bullied  ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_detachingFromSocial",
          "sortorder": 36,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_581"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_582"
            }
          ]
        },
        {
          "label": "Detaching from social / personal relationships",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_concludingPersonalAffairs",
          "sortorder": 37,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_583"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_584"
            }
          ]
        },
        {
          "label": "Concluding personal affairs (banking/will)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_confusedMentalStateIsEvident",
          "sortorder": 38,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_585"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_586"
            }
          ]
        },
        {
          "label": "A viable support system is available",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_aviableSupportSystemIsAvailable",
          "sortorder": 39,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_587"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_588"
            }
          ]
        },
        {
          "label": "Maintaining contact with significant others",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_maintainingContactWithSignificantOthers",
          "sortorder": 40,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_589"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_590"
            }
          ]
        },
        {
          "label": "Moral / religious restraints against suicide",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_moralReligiousRestraintsAgainstSuicide",
          "sortorder": 41,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_591"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_592"
            }
          ]
        },
        {
          "label": "Signs of affective openness and rapport",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_signsOfAffectiveOpennessAndRapport",
          "sortorder": 42,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_593"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_594"
            }
          ]
        },
        {
          "label": "History of physical / emotional wellbeing",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_historyOfPhysicalEmotionalWellbeing",
          "sortorder": 43,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_595"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_596"
            }
          ]
        },
        {
          "label": "Positive attitude toward personal responsibility",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_positiveAttitudeTowardPersonalResponsibility",
          "sortorder": 44,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_597"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_598"
            }
          ]
        },
        {
          "label": "Upon recovery, satisfying life situation exists",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_uponRecoverySatisfyingLifeSituationExists",
          "sortorder": 45,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_599"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_600"
            }
          ]
        },
        {
          "label": "Is receiving mental health care",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_isReceivingMentalHealthCare",
          "sortorder": 46,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Yes",
              "sortorder": 1,
              "code": "code_601"
            },
            {
              "name": "No",
              "sortorder": 2,
              "code": "code_602"
            }
          ]
        },
        {
          "label": "Other : ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_contraindicationsOther",
          "sortorder": 47,
          "type": "TEXT"
        },
        {
          "label": "DEGREE OF RISK",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_degreeOfRisk",
          "sortorder": 48,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "LOW - No plan - non-emergency",
              "sortorder": 1,
              "code": "code_605"
            },
            {
              "name": "MEDIUM - Has a plan - no imminent danger",
              "sortorder": 2,
              "code": "code_606"
            },
            {
              "name": "HIGH - Emergency – has a plan, likely to act",
              "sortorder": 3,
              "code": "code_607"
            }
          ]
        },
        {
          "label": "TREATMENT PLAN",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SRA_treatmentPlan",
          "sortorder": 49,
          "type": "LONG_TEXT"
        },
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 50,
          "type": "TEXT"
        }
      ],
      "name": "ST",
      "label": "SUICIDE RISK ASSESSMENT CHECKLIST",
      "isRepeat": true
    },
    "SIR": {
      "fields": [
        {
          "label": "DATE OF INCIDENT",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SIR_dateOfIncident",
          "sortorder": 1,
          "type": "DATE"
        },
        {
          "label": "TIME OF INCIDENT",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SIR_timeOfIncident",
          "sortorder": 2,
          "type": "TIME"
        },
        {
          "label": "LOCATION OF INCIDENT",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SIR_locationOfIncident",
          "sortorder": 3,
          "type": "TEXT"
        },
        {
          "label": "WITNESSES TO THE INCIDENT:",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SIR_witnesstoTheIncident",
          "sortorder": 4,
          "type": "TEXT"
        },
        {
          "label": "Indicate type of incident (check all that apply)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SIR_indicateTypeOfIncident",
          "sortorder": 5,
          "type": "MULTI CHECK BOX",
          "options": [
            {
              "name": "Death of a client",
              "sortorder": 1,
              "code": "code_608"
            },
            {
              "name": "Homicide committed by member who is receiving services or has been discharged within 30 days  Suicide attempt (with or without medical attention)",
              "sortorder": 2,
              "code": "code_609"
            },
            {
              "name": "Act of violence requiring medical intervention (includes intervention provided by staff nurse or physician) by  or to a member",
              "sortorder": 3,
              "code": "code_610"
            },
            {
              "name": "Alleged or suspected abuse (physical, sexual, financial or verbal) of or by a client",
              "sortorder": 4,
              "code": "code_612"
            },
            {
              "name": "Adverse reaction to medication and/or medication error administered by CAfRIC clinician",
              "sortorder": 5,
              "code": "code_615"
            },
            {
              "name": "Neglect resulting in injury or hospital treatment",
              "sortorder": 6,
              "code": "code_616"
            },
            {
              "name": "Any sexual contact involving a minor (includes peer to peer contact)",
              "sortorder": 7,
              "code": "code_617"
            },
            {
              "name": "Restraints (physical, mechanical, and /or chemical)",
              "sortorder": 8,
              "code": "code_618"
            },
            {
              "name": "Seclusion",
              "sortorder": 9,
              "code": "code_621"
            },
            {
              "name": "Police involvement or arrest (excludes involuntary commitments)",
              "sortorder": 10,
              "code": "code_622"
            },
            {
              "name": "Any physical ailment or injury that requires medical attention at a hospital on an emergency outpatient or  inpatient basis (including visits to urgent care)",
              "sortorder": 11,
              "code": "code_623"
            },
            {
              "name": "Contraband found on facility premises",
              "sortorder": 12,
              "code": "code_625"
            },
            {
              "name": "All non-routine discharges from residential treatment, detoxification, or Medication Assisted Treatment i.e.,administrative/involuntary discharges or leaving a facility against medical or facility advice.",
              "sortorder": 13,
              "code": "code_626"
            },
            {
              "name": "Missing person: adult/child/adolescent who has not returned home or facility within 4 hours or an at risk adult  who has not returned home within 24 hours (includes filing a police report)",
              "sortorder": 14,
              "code": "code_630"
            },
            {
              "name": "Other:",
              "sortorder": 15,
              "code": "code_631"
            }
          ]
        },
        {
          "label": "Indicate type of incident Other:",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SIR_indicateTypeOfIncidentOther",
          "sortorder": 6,
          "type": "TEXT"
        },
        {
          "label": "Summarize the incident. Include precipitating factors, current status, and a description of any injuries, medical condition, (if applicable):",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SIR_summarizeTheIncident",
          "sortorder": 7,
          "type": "TEXT"
        },
        {
          "label": "Describe any corrective actions taken to prevent reoccurrence:",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SIR_preventReoccurrence",
          "sortorder": 8,
          "type": "TEXT"
        },
        {
          "label": "Which of the following persons were notified by telephone?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "SIR_personsWereNotifiedByTelephone",
          "sortorder": 9,
          "type": "MULTI CHECK BOX",
          "options": [
            {
              "name": "Clinical Director",
              "sortorder": 1,
              "code": "code_632"
            },
            {
              "name": "Operations Director",
              "sortorder": 2,
              "code": "code_633"
            },
            {
              "name": "Supervisor",
              "sortorder": 3,
              "code": "code_634"
            },
            {
              "name": "Police",
              "sortorder": 4,
              "code": "code_635"
            },
            {
              "name": "Family/Significant Other",
              "sortorder": 5,
              "code": "code_636"
            },
            {
              "name": "Fire Department",
              "sortorder": 6,
              "code": "code_637"
            }
          ]
        },
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 10,
          "type": "TEXT"
        }
      ],
      "name": "SIR",
      "label": "SIGNIFICANT INCIDENT REPORT",
      "isRepeat": true
    },
    "CBI": {
      "fields": [
        {
          "label": "I am worthy of love and respect",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "worthy_of_love_and_respect",
          "sortorder": 1,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "valuescore":0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_638",
              "valuescore":1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_639",
              "valuescore":0
              
            }
          ]
        },
        {
          "label": "My world is a pretty safe place",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "my_world_is_a_pretty_safe_place",
          "sortorder": 2,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              securityscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_640",
              securityscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_641",
              securityscore:0
            }
          ]
        },
        {
          "label": "I perform many tasks well",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "perform_many_tasks_well",
          "sortorder": 3,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              performancescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_642",
              performancescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_643",
              performancescore:0
            }
          ]
        },
        {
          "label": "I am in control of my life",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "am_in_control_of_my_life",
          "sortorder": 4,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              controlscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_644",
              controlscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_645",
              controlscore:0
            }
          ]
        },
        {
          "label": "I feel loved and cared for",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_loved_and_cared_for",
          "sortorder": 5,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              lovescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_646",
              lovescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_647",
              lovescore:0
            }
          ]
        },
        {
          "label": "I can rely upon myself",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "can_rely_upon_myself",
          "sortorder": 6,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              autonomyscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_648",
              autonomyscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_649",
              autonomyscore:0
            }
          ]
        },
        {
          "label": "The world is neither fair nor unfair",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "he_world_is_neither_fair_nor_unfair",
          "sortorder": 7,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              justicescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_650",
              justicescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_651",
              justicescore:0
            }
          ]
        },
        {
          "label": "I feel a strong sense of belonging in my family and community",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_a_strong_sense_of_belonging",
          "sortorder": 8,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              belongingscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_652",
              belongingscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_653",
              belongingscore:0
            }
          ]
        },
        {
          "label": "Most people can be trusted",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "ost_people_can_be_trusted",
          "sortorder": 9,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              othersscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_654",
              othersscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_655",
              othersscore:0
            }
          ]
        },
        {
          "label": "I set reasonable standards for myself",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "set_reasonable_standards_for_myself",
          "sortorder": 10,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              standardsscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_656",
              standardsscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_657",
              standardsscore:0
            }
          ]
        },
        {
          "label": "I often feel flawed or defective",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "often_feel_flawed_or_defective",
          "sortorder": 11,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              valuescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_658",
              valuescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_659",
              valuescore:1
            }
          ]
        },
        {
          "label": "Life is dangerous – a medical, natural, or financial disaster could strike at any time",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "life_is_dangerous_a_medical_natural",
          "sortorder": 12,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              securityscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_660",
              securityscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_661",
              securityscore:1
            }
          ]
        },
        {
          "label": "I am basically incompetent",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "am_basically_incompetent",
          "sortorder": 13,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              performancescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_662",
              performancescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_663",
              performancescore:1
            }
          ]
        },
        {
          "label": "I have very little control over my life",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "have_very_little_control_over_my_life",
          "sortorder": 14,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              controlscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_664",
              controlscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_665",
              controlscore:1
            }
          ]
        },
        {
          "label": "I’ve never felt really cared for by my family",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "ive_never_felt_really_cared_for_by_my_family",
          "sortorder": 15,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              lovescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_666",
              lovescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_667",
              lovescore:1
            }
          ]
        },
        {
          "label": "Others can care for me better than I can care for myself",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "others_can_care_for_me_better_than_I_can_care_for_myself",
          "sortorder": 16,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              autonomyscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_668",
              autonomyscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_669",
              autonomyscore:1
            }
          ]
        },
        {
          "label": "I get upset when I don’t get what I want – I hate to take no for an answer",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "get_upset_when_I_dont_get_what_I_want",
          "sortorder": 17,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              justicescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_670",
              justicescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_671",
              justicescore:1
            }
          ]
        },
        {
          "label": "I frequently feel left out of groups",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "frequently_feel_left_out_of_groups",
          "sortorder": 18,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              belongingscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_672",
              belongingscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_673",
              belongingscore:1
            }
          ]
        },
        {
          "label": "Many people would like to hurt me or take advantage of me",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "many_people_would_like_to_hurt_me_or_take_advantage_of_me",
          "sortorder": 19,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              othersscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_674",
              othersscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_675",
              othersscore:1
            }
          ]
        },
        {
          "label": "Very little of what I do satisfies me – I usually think I could do better",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "very_little_of_what_I_do_satisfies_me",
          "sortorder": 20,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              standardsscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_676",
              standardsscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_677",
              standardsscore:1
            }
          ]
        },
        {
          "label": "I feel OK about myself",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_OK_about_myself",
          "sortorder": 21,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              valuescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_678",
              valuescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_679",
              valuescore:0
            }
          ]
        },
        {
          "label": "I can protect myself from most dangers",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "can_protect_myself_from_most_dangers",
          "sortorder": 22,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              securityscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_680",
              securityscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_681",
              securityscore:0
            }
          ]
        },
        {
          "label": "Doing some things comes easy for me",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "doing_some_things_comes_easy_for_me",
          "sortorder": 23,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              performancescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_682",
              performancescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_683",
              performancescore:0
            }
          ]
        },
        {
          "label": "I have the power I need to solve most of my problems",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "have_the_power_I_need_to_solve_most_of_my_problems",
          "sortorder": 24,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              controlscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_684",
              controlscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_685",
              controlscore:0
            }
          ]
        },
        {
          "label": "I have at least one satisfying intimate relationship",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "have_at_least_one_satisfying_intimate_relationship",
          "sortorder": 25,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              lovescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_686",
              lovescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_687",
              lovescore:0
            }
          ]
        },
        {
          "label": "It’s OK to disagree with others",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "its_OK_to_disagree_with_others",
          "sortorder": 26,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              autonomyscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_688",
              autonomyscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_689",
              autonomyscore:0
            }
          ]
        },
        {
          "label": "I accept it when I don’t get what I want",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "accept_it_when_I_dont_get_what_I_want",
          "sortorder": 27,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              justicescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_690",
              justicescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_691",
              justicescore:0
            }
          ]
        },
        {
          "label": "I fit in well with my circle of friends",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "fit_in_well_with_my_circle_of_friends",
          "sortorder": 28,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              belongingscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_692",
              belongingscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_693",
              belongingscore:0
            }
          ]
        },
        {
          "label": "I rarely need to protect or guard myself with other people",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "rarely_need_to_protect_or_guard_myself",
          "sortorder": 29,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              othersscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_694",
              othersscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_695",
              othersscore:0
            }
          ]
        },
        {
          "label": "I can forgive myself for failure",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "can_forgive_myself_for_failure",
          "sortorder": 30,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              standardsscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_696",
              standardsscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_697",
              standardsscore:0
            }
          ]
        },
        {
          "label": "Nobody I desire would desire me if they really got ot know me",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "nobody_I_desire_would_desire_me",
          "sortorder": 31,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              valuescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_698",
              valuescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_699",
              valuescore:1
            }
          ]
        },
        {
          "label": "I worry about getting sick or hurt",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "worry_about_getting_sick_or_hurt",
          "sortorder": 32,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              securityscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_700",
              securityscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_701",
              securityscore:1
            }
          ]
        },
        {
          "label": "When I trust my own judgment, I make wrong decisions",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "When_I_trust_my_own_judgment",
          "sortorder": 33,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              performancescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_702",
              performancescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_703",
              performancescore:1
            }
          ]
        },
        {
          "label": "Events just bowl me over sometimes",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "events_just_bowl_me_over_sometimes",
          "sortorder": 34,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              controlscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_704",
              controlscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_705",
              controlscore:1
            }
          ]
        },
        {
          "label": "My relationships are shallow – if I disappeared tomorrow, no one would notice",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "my_relationships_are_shallow",
          "sortorder": 35,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              lovescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_706",
              lovescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_707",
              lovescore:1
            }
          ]
        },
        {
          "label": "I find myself going along with others’ plans",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "find_myself_going_along_with_others_plans",
          "sortorder": 36,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              autonomyscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_708",
              autonomyscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_709",
              autonomyscore:1
            }
          ]
        },
        {
          "label": "There are certain things I simply must have to be happy",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "There_are_certain_things_I_simply",
          "sortorder": 37,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              justicescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_710",
              justicescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_711",
              justicescore:1
            }
          ]
        },
        {
          "label": "I feel like an outsider",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_like_an_outsider",
          "sortorder": 38,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              belongingscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_712",
              belongingscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_713",
              belongingscore:1
            }
          ]
        },
        {
          "label": "Most people think only of themselves",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "most_people_think_only_of_themselves",
          "sortorder": 39,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              othersscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_714",
              othersscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_715",
              othersscore:1
            }
          ]
        },
        {
          "label": "I’m a perfectionist; I must be the best at whatever I do",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "im_a_perfectionist_I_must_be_the_best_at_whatever_I_do",
          "sortorder": 40,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              standardsscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_716",
              standardsscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_717",
              standardsscore:1
            }
          ]
        },
        {
          "label": "I have legitimate needs I deserve to fill",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "have_legitimate_needs_I_deserve_to_fill",
          "sortorder": 41,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              valuescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_718",
              valuescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_719",
              valuescore:0
            }
          ]
        },
        {
          "label": "I am willing to take risks",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "am_willing_to_take_risks",
          "sortorder": 42,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              securityscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_720",
              securityscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_721",
              securityscore:0
            }
          ]
        },
        {
          "label": "I am a competent person, as capable as most people",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "am_a_competent_person_as_capable_as_most_people",
          "sortorder": 43,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              performancescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_722",
              performancescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_723",
              performancescore:0
            }
          ]
        },
        {
          "label": "My impulses don’t control me",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "my_impulses_dont_control_me",
          "sortorder": 44,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              controlscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_724",
              controlscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_725",
              controlscore:0
            }
          ]
        },
        {
          "label": "I feel nurtured in my family",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_nurtured_in_my_family",
          "sortorder": 45,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              lovescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_726",
              lovescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_727",
              lovescore:0
            }
          ]
        },
        {
          "label": "I don’t need the approval of others for everything I do",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "dont_need_the_approval_of_others_for_everything_I_do",
          "sortorder": 46,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              autonomyscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_728",
              autonomyscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_729",
              autonomyscore:0
            }
          ]
        },
        {
          "label": "Things tend to work out, even in the end",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "Things_tend_to_work_out_even_in_the_end",
          "sortorder": 47,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              justicescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_730",
              justicescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_731",
              justicescore:0
            }
          ]
        },
        {
          "label": "People usually accept me as I am",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "people_usually_accept_me_as_I_am",
          "sortorder": 48,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              belongingscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_732",
              belongingscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_733",
              belongingscore:0
            }
          ]
        },
        {
          "label": "I seldom feel taken advantage of",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "seldom_feel_taken_advantage_of",
          "sortorder": 49,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              othersscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_734",
              othersscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_735",
              othersscore:0
            }
          ]
        },
        {
          "label": "I set achievable goals for myself",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "set_achievable_goals_for_myself",
          "sortorder": 50,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              standardsscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_736",
              standardsscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_737",
              standardsscore:0
            }
          ]
        },
        {
          "label": "I’m dull and boring and can’t make interesting conversation",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "im_dull_and_boring_and_cant_make_interesting",
          "sortorder": 51,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              valuescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_738",
              valuescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_739",
              valuescore:1
            }
          ]
        },
        {
          "label": "If I’m not careful with my money, I might end up with nothing",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "if_Im_not_careful_with_my_money",
          "sortorder": 52,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              securityscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_740",
              securityscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_741",
              securityscore:1
            }
          ]
        },
        {
          "label": "I tend to avoid new challenges",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "tend_to_avoid_new_challenges",
          "sortorder": 53,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              performancescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_742",
              performancescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_743",
              performancescore:1
            }
          ]
        },
        {
          "label": "I fear I’ll give in to overwhelming crying, anger, or sexual impulses",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "fear_Ill_give_in_to_overwhelming",
          "sortorder": 54,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              controlscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_744",
              controlscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_745",
              controlscore:1
            }
          ]
        },
        {
          "label": "I’m afraid of being abandoned – that a loved one will die or reject me",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "im_afraid_of_being_abandoned",
          "sortorder": 55,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              lovescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_746",
              lovescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_747",
              lovescore:1
            }
          ]
        },
        {
          "label": "I don’t function well on my own",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "dont_function_well_on_my_own",
          "sortorder": 56,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              autonomyscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_748",
              autonomyscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_749",
              autonomyscore:1
            }
          ]
        },
        {
          "label": "I feel I shouldn’t have to accept some of the limitations placed on ordinary people",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_I_shouldnt_have_to_accept",
          "sortorder": 57,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              justicescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_750",
              justicescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_751",
              justicescore:1
            }
          ]
        },
        {
          "label": "People don’t usually include me in what they’re doing",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "people_dont_usually_include_me_in_what_theyre_doing",
          "sortorder": 58,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              belongingscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_752",
              belongingscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_753",
              belongingscore:1
            }
          ]
        },
        {
          "label": "Most people can’t be trusted",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "most_people_cant_be_trusted",
          "sortorder": 59,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              othersscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_754",
              othersscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_755",
              othersscore:1
            }
          ]
        },
        {
          "label": "Failure is very upsetting to me",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "failure_is_very_upsetting_to_me",
          "sortorder": 60,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              standardsscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_756",
              standardsscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_757",
              standardsscore:1
            }
          ]
        },
        {
          "label": "I count for something in the world",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "count_for_something_in_the_world",
          "sortorder": 61,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              valuescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_758",
              valuescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_759",
              valuescore:0
            }
          ]
        },
        {
          "label": "I can take care of myself and my loved ones",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "can_take_care_of_myself_and_my_loved_ones",
          "sortorder": 62,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              securityscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_760",
              securityscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_761",
              securityscore:0
            }
          ]
        },
        {
          "label": "I can learn new skills if I try",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "can_learn_new_skills_if_I_try",
          "sortorder": 63,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              performancescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_762",
              performancescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_763",
              performancescore:0
            }
          ]
        },
        {
          "label": "I can usually control my feelings",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "can_usually_control_my_feelings",
          "sortorder": 64,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              controlscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_764",
              controlscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_765",
              controlscore:0
            }
          ]
        },
        {
          "label": "I can get the care and attention I need",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "can_get_the_care_and_attention_I_need",
          "sortorder": 65,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              lovescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_766",
              lovescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_767",
              lovescore:0
            }
          ]
        },
        {
          "label": "I like to spend time by myself",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "like_to_spend_time_by_myself",
          "sortorder": 66,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              autonomyscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_768",
              autonomyscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_769",
              autonomyscore:0
            }
          ]
        },
        {
          "label": "Most of the time I feel fairly treated",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "most_of_the_time_I_feel_fairly_treated",
          "sortorder": 67,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              justicescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_770",
              justicescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_771",
              justicescore:0
            }
          ]
        },
        {
          "label": "My hopes and dreams are much like everyone else’s",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "my_hopes_and_dreams_are_much_like_everyone_elses",
          "sortorder": 68,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              belongingscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_772",
              belongingscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_773",
              belongingscore:0
            }
          ]
        },
        {
          "label": "I give people the benefit of the doubt",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "give_people_the_benefit_of_the_doubt",
          "sortorder": 69,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              othersscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_774",
              othersscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_775",
              othersscore:0
            }
          ]
        },
        {
          "label": "I’m not perfect and that’s OK",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "im_not_perfect_and_thats_OK",
          "sortorder": 70,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              standardsscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_776",
              standardsscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_777",
              standardsscore:0
            }
          ]
        },
        {
          "label": "I’m unattractive",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "im_unattractive",
          "sortorder": 71,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              valuescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_778",
              valuescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_779",
              valuescore:1
            }
          ]
        },
        {
          "label": "I choose my old, familiar ways of doing things over risking the unexpected",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "choose_my_old_familiar_ways_of_doing_things",
          "sortorder": 72,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              securityscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_780",
              securityscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_781",
              securityscore:1
            }
          ]
        },
        {
          "label": "I don’t perform well under stress",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "dont_perform_well_under_stress",
          "sortorder": 73,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              performancescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_782",
              performancescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_783",
              performancescore:1
            }
          ]
        },
        {
          "label": "I’m powerless to change many of the situations I’m in",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "Im_powerless_to_change_many_of_the_situations_Im_in",
          "sortorder": 74,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              controlscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_784",
              controlscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_785",
              controlscore:1
            }
          ]
        },
        {
          "label": "There’s no one I can count on for support and advice",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "Theres_no_one_I_can_count_on_for_support_and_advice",
          "sortorder": 75,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              lovescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_786",
              lovescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_787",
              lovescore:1
            }
          ]
        },
        {
          "label": "I try hard to please others and I put their needs before my own",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "try_hard_to_please_others",
          "sortorder": 76,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              autonomyscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_788",
              autonomyscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_789",
              autonomyscore:1
            }
          ]
        },
        {
          "label": "I tend to expect the worst",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "tend_to_expect_the_worst",
          "sortorder": 77,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              justicescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_790",
              justicescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_791",
              justicescore:1
            }
          ]
        },
        {
          "label": "Sometimes I feel like an alien, very different from everybody else",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "sometimes_I_feel_like_an_alien",
          "sortorder": 78,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              belongingscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_792",
              belongingscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_793",
              belongingscore:1
            }
          ]
        },
        {
          "label": "I must be on my guard against others’ lies and hostile remarks",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "must_be_on_my_guard_against",
          "sortorder": 79,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              othersscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_794",
              othersscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_795",
              othersscore:1
            }
          ]
        },
        {
          "label": "I push myself so hard that I harm my relationships, my health, or my happiness",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "push_myself_so_hard_that_I_harm",
          "sortorder": 80,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              standardsscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_796",
              standardsscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_797",
              standardsscore:1
            }
          ]
        },
        {
          "label": "People I like and respect often like and respect me",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "People_I_like_and_respect_often_like_and_respect_me",
          "sortorder": 81,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              valuescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_798",
              valuescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_799",
              valuescore:0
            }
          ]
        },
        {
          "label": "I don’t worry much about health or money",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "dont_worry_much_about_health_or_money",
          "sortorder": 82,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              securityscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_800",
              securityscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_801",
              securityscore:0
            }
          ]
        },
        {
          "label": "Most of my decisions are sound",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "most_of_my_decisions_are_sound",
          "sortorder": 83,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              performancescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_802",
              performancescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_803",
              performancescore:0
            }
          ]
        },
        {
          "label": "I can take charge when I need to",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "can_take_charge_when_I_need_to",
          "sortorder": 84,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              controlscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_804",
              controlscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_805",
              controlscore:0
            }
          ]
        },
        {
          "label": "I can depend on my friends for advice and emotional support",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "can_depend_on_my_friends_for_advice_and_emotional_support",
          "sortorder": 85,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              lovescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_806",
              lovescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_807",
              lovescore:0
            }
          ]
        },
        {
          "label": "I think for myself, I can stand up for my ideas",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "think_for_myself_I_can_stand_up_for_my_ideas",
          "sortorder": 86,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              autonomyscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_808",
              autonomyscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_809",
              autonomyscore:0
            }
          ]
        },
        {
          "label": "I am treated fairly most of the time",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "am_treated_fairly_most_of_the_time",
          "sortorder": 87,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              justicescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_810",
              justicescore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_811",
              justicescore:0
            }
          ]
        },
        {
          "label": "I could change jobs or join a club and soon fit in",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "could_change_jobs_or_join_a_club_and_soon_fit_in",
          "sortorder": 88,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              belongingscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_812",
              belongingscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_813",
              belongingscore:0
            }
          ]
        },
        {
          "label": "I’d rather be too gullible than too suspicious",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "id_rather_be_too_gullible_than_too_suspicious",
          "sortorder": 89,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              othersscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_814",
              othersscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_815",
              othersscore:0
            }
          ]
        },
        {
          "label": "It’s OK to make mistakes",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "Its_OK_to_make_mistakes",
          "sortorder": 90,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              standardsscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_816",
              standardsscore:1
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_817",
              standardsscore:0
            }
          ]
        },
        {
          "label": "I don’t deserve much attention or respect",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "dont_deserve_much_attention_or_respect",
          "sortorder": 91,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              valuescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_818",
              valuescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_819",
              valuescore:1
            }
          ]
        },
        {
          "label": "I feel uneasy when I go very far from home alone",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_uneasy_when_I_go_very_far_from_home_alone",
          "sortorder": 92,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              securityscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_820",
              securityscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_821",
              securityscore:1
            }
          ]
        },
        {
          "label": "I mess up everything I attempt",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "mess_up_everything_I_attempt",
          "sortorder": 93,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              performancescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_822",
              performancescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_823",
              performancescore:1
            }
          ]
        },
        {
          "label": "I’m often a victim of circumstances",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "im_often_a_victim_of_circumstances",
          "sortorder": 94,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              controlscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_824",
              controlscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_825",
              controlscore:1
            }
          ]
        },
        {
          "label": "I have no one who hugs me, shares secrets with me, or really cares what happens to me",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "have_no_one_who_hugs_me_shares_secrets",
          "sortorder": 95,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              lovescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_826",
              lovescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_827",
              lovescore:1
            }
          ]
        },
        {
          "label": "I have trouble making my own wants and needs known",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "have_trouble_making_my_own_wants",
          "sortorder": 96,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              autonomyscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_828",
              autonomyscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_829",
              autonomyscore:1
            }
          ]
        },
        {
          "label": "Although my life is objectively OK, I have a lot of trouble accepting some parts that aren’t the way I’d like them to be",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "although_my_life_is_objectively_OK",
          "sortorder": 97,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              justicescore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_830",
              justicescore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_831",
              justicescore:1
            }
          ]
        },
        {
          "label": "I don’t feel I belong where I am",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "dont_feel_I_belong_where_I_am",
          "sortorder": 98,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              belongingscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_832",
              belongingscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_833",
              belongingscore:1
            }
          ]
        },
        {
          "label": "Most people will break their promises and lie",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "most_people_will_break_their_promises_and_lie",
          "sortorder": 99,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              othersscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_834",
              othersscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_835",
              othersscore:1
            }
          ]
        },
        {
          "label": "I have very clear, black-and-white rules for myself",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "have_very_clear_black_and_white_rules_for_myself",
          "sortorder": 100,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              standardsscore:0
            },
            {
              "name": "True",
              "sortorder": 1,
              "code": "code_836",
              standardsscore:0
            },
            {
              "name": "False",
              "sortorder": 2,
              "code": "code_837",
              standardsscore:1
            }
          ]
        },
        {
          "label": "Value",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "CBI_value",
          "sortorder": 101,
          "type": "NUMBER",
          "id":"CBI_value",
          totalscore:true
        },
        {
          "label": "Security",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "CBI_security",
          "id":"CBI_security",
          "sortorder": 102,
          "type": "NUMBER",
          totalscore:true
        },
        {
          "label": "Performance",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "CBI_performance",
          "sortorder": 103,
          "type": "NUMBER",
          "id":"CBI_performance",
          totalscore:true
        },
        {
          "label": "Control",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "CBI_control",
          "sortorder": 103,
          "type": "NUMBER",
          "id":"CBI_control",
          totalscore:true
        },
        {
          "label": "Love",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "CBI_love",
          "sortorder": 104,
          "type": "NUMBER",
          "id":"CBI_love",
          totalscore:true
        },
        {
          "label": "Autonomy",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "CBI_autonomy",
          "sortorder": 105,
          "type": "NUMBER",
          "id":"CBI_autonomy",
          totalscore:true
        },
        {
          "label": "Justice",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "CBI_justice",
          "sortorder": 106,
          "type": "NUMBER",
          "id":"CBI_justice",
          totalscore:true
        },
        {
          "label": "Belonging",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "CBI_belonging",
          "sortorder": 107,
          "type": "NUMBER",
          "id":"CBI_belonging",
          totalscore:true
        },
        {
          "label": "Others",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "CBI_others",
          "sortorder": 108,
          "type": "NUMBER",
          "id":"CBI_others",
          totalscore:true
        },
        {
          "label": "Standards",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "CBI_standards",
          "id":"CBI_standards",
          "sortorder": 109,
          "type": "NUMBER",
          totalscore:true
        },
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 110,
          "type": "TEXT"
        }
      ],
      "name": "CBI",
      "label": "Core Beliefs Inventory",
      "isRepeat": true
    },
    "PROQOL": {
      "fields": [
        {
          "label": "I am happy.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "am_happy",
          "sortorder": 1,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "burnoutscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_838",
              "burnoutscore":5
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_839",
              "burnoutscore":4
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_840",
              "burnoutscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_841",
              "burnoutscore":2
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_842",
              "burnoutscore":1
            }
          ]
        },
        {
          "label": "I am preoccupied with more than one person I [help].",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "am_preoccupied_with_more_than_one_person",
          "sortorder": 2,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "traumaticstressscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_843",
              "traumaticstressscore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_844",
              "traumaticstressscore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_845",
              "traumaticstressscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_846",
              "traumaticstressscore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_847",
              "traumaticstressscore":5
            }
          ]
        },
        {
          "label": "I get satisfaction from being able to [help] people.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "get_satisfaction_from_being_able_to_help_people",
          "sortorder": 3,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "compassionsatisfactionScore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_848",
              "compassionsatisfactionScore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_849"
              ,
              "compassionsatisfactionScore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_850",
              "compassionsatisfactionScore":3

            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_851",
              "compassionsatisfactionScore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_852",
              "compassionsatisfactionScore":5
            }
          ]
        },
        {
          "label": "I feel connected to others.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_connected_to_others",
          "sortorder": 4,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "burnoutscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_853",
              "burnoutscore":5
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_854",
              "burnoutscore":4
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_855",
              "burnoutscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_856",
              "burnoutscore":2
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_857",
              "burnoutscore":1
            }
          ]
        },
        {
          "label": "I jump or am startled by unexpected sounds.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "jump_or_am_startled_by_unexpected_sounds",
          "sortorder": 5,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "traumaticstressscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_858",
              "traumaticstressscore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_859",
              "traumaticstressscore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_860",
              "traumaticstressscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_861",
              "traumaticstressscore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_862",
              "traumaticstressscore":5
            }
          ]
        },
        {
          "label": "I feel invigorated after working with those I [help].",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_invigorated_after_working_with_those",
          "sortorder": 6,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "compassionsatisfactionScore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_863",
              "compassionsatisfactionScore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_864",
              "compassionsatisfactionScore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_865",
              "compassionsatisfactionScore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_866",
              "compassionsatisfactionScore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_867",
              "compassionsatisfactionScore":5
            }
          ]
        },
        {
          "label": "I find it difficult to separate my personal life from my life as a [helper].",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "find_it_difficult_to_separate_my_personal_life",
          "sortorder": 7,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "traumaticstressscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_868",
              "traumaticstressscore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_869",
              "traumaticstressscore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_870",
              "traumaticstressscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_871",
              "traumaticstressscore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_872",
              "traumaticstressscore":5
            }
          ]
        },
        {
          "label": "I am not as productive at work because I am losing sleep over traumatic experiences of a person I ",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "am_not_as_productive_at_work",
          "sortorder": 8,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "burnoutscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_873",
              "burnoutscore":5
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_874",
              "burnoutscore":4
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_875",
              "burnoutscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_876",
              "burnoutscore":2
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_877",
              "burnoutscore":1
            }
          ]
        },
        {
          "label": "I think that I might have been affected by the traumatic stress of those I [help].",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "think_that_I_might_have_been_affected",
          "sortorder": 9,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "traumaticstressscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_878",
              "traumaticstressscore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_879",
              "traumaticstressscore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_880",
              "traumaticstressscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_881",
              "traumaticstressscore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_882",
              "traumaticstressscore":5
            }
          ]
        },
        {
          "label": "I feel trapped by my job as a [helper].",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_trapped_by_my_job",
          "sortorder": 10,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "burnoutscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_883",
              "burnoutscore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_884",
              "burnoutscore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_885",
              "burnoutscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_886",
              "burnoutscore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_887",
              "burnoutscore":5
            }
          ]
        },
        {
          "label": "Because of my [helping], I have felt \"on edge\" about various things.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "because_of_my_helping_I_have_felton",
          "sortorder": 11,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "traumaticstressscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_888",
              "traumaticstressscore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_889",
              "traumaticstressscore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_890",
              "traumaticstressscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_891",
              "traumaticstressscore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_892",
              "traumaticstressscore":5
            }
          ]
        },
        {
          "label": "I like my work as a [helper].",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "like_my_work_as_a_helper",
          "sortorder": 12,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "compassionsatisfactionScore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_893",
              "compassionsatisfactionScore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_894",
              "compassionsatisfactionScore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_895",
              "compassionsatisfactionScore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_896",
              "compassionsatisfactionScore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_897",
              "compassionsatisfactionScore":5
            }
          ]
        },
        {
          "label": "I feel depressed because of the traumatic experiences of the people I [help].",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_depressed_because_of_the_traumatic",
          "sortorder": 13,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "traumaticstressscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_898",
              "traumaticstressscore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_899",
              "traumaticstressscore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_900",
              "traumaticstressscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_901",
              "traumaticstressscore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_902",
              "traumaticstressscore":5
            }
          ]
        },
        {
          "label": "I feel as though I am experiencing the trauma of someone I have [helped].",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_as_though_I_am_experiencing",
          "sortorder": 14,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "traumaticstressscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_903",
              "traumaticstressscore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_904",
              "traumaticstressscore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_905",
              "traumaticstressscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_906",
              "traumaticstressscore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_907",
              "traumaticstressscore":5
            }
          ]
        },
        {
          "label": "I have beliefs that sustain me.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "have_beliefs_that_sustain_me",
          "sortorder": 15,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "burnoutscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_908",
              "burnoutscore":5
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_909",
              "burnoutscore":4
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_910",
              "burnoutscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_911",
              "burnoutscore":2
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_912",
              "burnoutscore":1
            }
          ]
        },
        {
          "label": "I am pleased with how I am able to keep up with [helping] techniques and protocols.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "am_pleased_with_how_I_am_able_to_keep_up",
          "sortorder": 16,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "compassionsatisfactionScore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_913",
              "compassionsatisfactionScore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_914",
              "compassionsatisfactionScore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_915",
              "compassionsatisfactionScore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_916",
              "compassionsatisfactionScore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_917",
              "compassionsatisfactionScore":5
            }
          ]
        },
        {
          "label": "I am the person I always wanted to be.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "am_the_person_I_always_wanted_to_be",
          "sortorder": 17,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "burnoutscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_918",
              "burnoutscore":5
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_919",
              "burnoutscore":4
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_920",
              "burnoutscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_921",
              "burnoutscore":2
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_922",
              "burnoutscore":1
            }
          ]
        },
        {
          "label": "My work makes me feel satisfied.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "my_work_makes_me_feel_satisfied",
          "sortorder": 18,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "compassionsatisfactionScore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_923",
              "compassionsatisfactionScore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_924",
              "compassionsatisfactionScore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_925",
              "compassionsatisfactionScore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_926",
              "compassionsatisfactionScore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_927",
              "compassionsatisfactionScore":5
            }
          ]
        },
        {
          "label": "I feel worn out because of my work as a [helper].",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_worn_out_because_of_my_work",
          "sortorder": 19,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "burnoutscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_928",
              "burnoutscore":5
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_929",
              "burnoutscore":4
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_930",
              "burnoutscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_931",
              "burnoutscore":2
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_932",
              "burnoutscore":1
            }
          ]
        },
        {
          "label": "I have happy thoughts and feelings about those I [help] and how I could help them.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "have_happy_thoughts_and_feelings",
          "sortorder": 20,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "compassionsatisfactionScore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_933",
              "compassionsatisfactionScore":1
              
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_934",
              "compassionsatisfactionScore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_935",
              "compassionsatisfactionScore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_936",
              "compassionsatisfactionScore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_937",
              "compassionsatisfactionScore":5
            }
          ]
        },
        {
          "label": "I feel overwhelmed because my case [work] load seems endless.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_overwhelmed_because_my_case_work_load_seems_endless",
          "sortorder": 21,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "burnoutscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_938",
              "burnoutscore":5
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_939",
              "burnoutscore":4
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_940",
              "burnoutscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_941",
              "burnoutscore":2
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_942",
              "burnoutscore":1
            }
          ]
        },
        {
          "label": "I believe I can make a difference through my work.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "believe_I_can_make_a_difference_through_my_work",
          "sortorder": 22,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "compassionsatisfactionScore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_943",
              "compassionsatisfactionScore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_944",
              "compassionsatisfactionScore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_945",
              "compassionsatisfactionScore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_946",
              "compassionsatisfactionScore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_947",
              "compassionsatisfactionScore":5
            }
          ]
        },
        {
          "label": "I avoid certain activities or situations because they remind me of frightening experiences of the",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "avoid_certain_activities_or_situations",
          "sortorder": 23,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "traumaticstressscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_948",
              "traumaticstressscore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_949",
              "traumaticstressscore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_950",
              "traumaticstressscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_951",
              "traumaticstressscore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_952",
              "traumaticstressscore":5
            }
          ]
        },
        {
          "label": "I am proud of what I can do to [help].",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "am_proud_of_what_I_can_do_to",
          "sortorder": 24,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "compassionsatisfactionScore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_953",
              "compassionsatisfactionScore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_954",
              "compassionsatisfactionScore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_955",
              "compassionsatisfactionScore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_956",
              "compassionsatisfactionScore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_957",
              "compassionsatisfactionScore":5
            }
          ]
        },
        {
          "label": "As a result of my [helping], I have intrusive, frightening thoughts.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "as_a_result_of_my_helping_I_have_intrusive_frightening_thoughts",
          "sortorder": 25,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "traumaticstressscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_958",
              "traumaticstressscore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_959",
              "traumaticstressscore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_960",
              "traumaticstressscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_961",
              "traumaticstressscore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_962",
              "traumaticstressscore":5
            }
          ]
        },
        {
          "label": "I feel \"bogged down\" by the system.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_bogged_down_by_the_system",
          "sortorder": 26,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "burnoutscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_963",
              "burnoutscore":5
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_964",
              "burnoutscore":4
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_965",
              "burnoutscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_966",
              "burnoutscore":2
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_967",
              "burnoutscore":1
            }
          ]
        },
        {
          "label": "I have thoughts that I am a \"success\" as a [helper].",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "have_thoughts_that_I_am_a_success_as_a_helper",
          "sortorder": 27,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "compassionsatisfactionScore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_968",
              "compassionsatisfactionScore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_969",
              "compassionsatisfactionScore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_970",
              "compassionsatisfactionScore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_971",
              "compassionsatisfactionScore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_972",
              "compassionsatisfactionScore":5
            }
          ]
        },
        {
          "label": "I can't recall important parts of my work with trauma victims.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "cant_recall_important_parts_of_my_work_with_trauma_victims",
          "sortorder": 28,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "traumaticstressscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_973",
              "traumaticstressscore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_974",
              "traumaticstressscore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_975",
              "traumaticstressscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_976",
              "traumaticstressscore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_977",
              "traumaticstressscore":5
            }
          ]
        },
        {
          "label": "I am a very caring person.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "am_a_very_caring_person",
          "sortorder": 29,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "burnoutscore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_978",
              "burnoutscore":5
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_979",
              "burnoutscore":4
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_980",
              "burnoutscore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_981",
              "burnoutscore":2
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_982",
              "burnoutscore":1
            }
          ]
        },
        {
          "label": "I am happy that I chose to do this work.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "am_happy_that_I_chose_to_do_this_work",
          "sortorder": 30,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "compassionsatisfactionScore":0
            },
            {
              "name": "1=Never",
              "sortorder": 1,
              "code": "code_983",
              "compassionsatisfactionScore":1
            },
            {
              "name": "2=Rarely",
              "sortorder": 2,
              "code": "code_984",
              "compassionsatisfactionScore":2
            },
            {
              "name": "3=Sometimes",
              "sortorder": 3,
              "code": "code_985",
              "compassionsatisfactionScore":3
            },
            {
              "name": "4=Often",
              "sortorder": 4,
              "code": "code_986",
              "compassionsatisfactionScore":4
            },
            {
              "name": "5=Very Often",
              "sortorder": 5,
              "code": "code_987",
              "compassionsatisfactionScore":5
            }
          ]
        },
        {
          "label": "The sum  of my  Compassion  Satisfaction  questions is",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "compassions_satisfaction_scale_totalscore",
          "sortorder": 31,
          "type": "NUMBER",
          "id":"compassions_satisfaction_scale_totalscore"
        },
        {
          "label": "The sum of  my Burnout  Questions is",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "burnout_scale_totalscore",
          "sortorder": 32,
          "type": "NUMBER",
          "id":"burnoutscore_scale_totalscore"
        },
        {
          "label": "The sum of  my  Secondary  Trauma  questions is",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "secondary_traumatic_stress_scale_totalscore",
          "sortorder": 33,
          "type": "NUMBER",
          "id":"secondary_traumatic_stress_scale_totalscore"
        },
        {
          "label": "my  Compassion  Satisfaction  level is",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "compassions_satisfaction_scale",
          "sortorder": 34,
          "type": "SELECT",
           "id":"compassions_satisfaction_scale",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Low",
              "sortorder": 1,
              "code": "code_988"
            },
            {
              "name": "Moderate",
              "sortorder": 2,
              "code": "code_989"
            },
            {
              "name": "High",
              "sortorder": 3,
              "code": "code_990"
            }
          ]
        },
        {
          "label": "my  Burnout  level is",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "burnout_scale",
          "sortorder": 35,
          "type": "SELECT",
          "id":"burnout_scale",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Low",
              "sortorder": 1,
              "code": "code_991"
            },
            {
              "name": "Moderate",
              "sortorder": 2,
              "code": "code_992"
            },
            {
              "name": "High",
              "sortorder": 3,
              "code": "code_993"
            }
          ]
        },
        {
          "label": "my  Secondary  Traumatic  Stress level  is",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "secondary_traumatic_stress_scale",
          "sortorder": 36,
          "type": "SELECT",
          "id":"secondary_traumatic_stress_scale",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Low",
              "sortorder": 1,
              "code": "code_994"
            },
            {
              "name": "Moderate",
              "sortorder": 2,
              "code": "code_995"
            },
            {
              "name": "High",
              "sortorder": 3,
              "code": "code_996"
            }
          ]
        }
        ,
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 37,
          "type": "TEXT"
        }],
      "name": "PROQOL",
      "label": "PROFESSIONAL QUALITY OF LIFE SCALE",
      "isRepeat": true
    },
    "PSS": {
      "fields": [
        {
          "label": "In the last month, how often have you been upset because of something that  happened unexpectedly?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "last_month_how_often_have_you_been_upset_unexpectedly",
          "sortorder": 1,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "totalscore":0
            },
            {
              "name": "0 - never",
              "sortorder": 1,
              "code": "code_997",
              "totalscore":0
            },
            {
              "name": "1 - almost never",
              "sortorder": 2,
              "code": "code_998",
              "totalscore":1
            },
            {
              "name": "2 - sometimes",
              "sortorder": 3,
              "code": "code_999",
              "totalscore":2
            },
            {
              "name": "3 - fairly often",
              "sortorder": 4,
              "code": "code_1000",
              "totalscore":3
            },
            {
              "name": "4 - very often",
              "sortorder": 5,
              "code": "code_1001",
              "totalscore":4
            }
          ]
        },
        {
          "label": "In the last month, how often have you felt that you were unable to control the  important things in your life?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "last_month_control_the_important_things_in_your_life",
          "sortorder": 2,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "totalscore":0
            },
            {
              "name": "0 - never",
              "sortorder": 1,
              "code": "code_1002",
              "totalscore":0
            },
            {
              "name": "1 - almost never",
              "sortorder": 2,
              "code": "code_1003",
              "totalscore":1
            },
            {
              "name": "2 - sometimes",
              "sortorder": 3,
              "code": "code_1004",
              "totalscore":2
            },
            {
              "name": "3 - fairly often",
              "sortorder": 4,
              "code": "code_1005" ,
              "totalscore":3
            },
            {
              "name": "4 - very often",
              "sortorder": 5,
              "code": "code_1006",
              "totalscore":4
            }
          ]
        },
        {
          "label": "In the last month, how often have you felt nervous and stressed?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "last_month_nervous_and_stressed",
          "sortorder": 3,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "totalscore":0
            },
            {
              "name": "0 - never",
              "sortorder": 1,
              "code": "code_1007",
              "totalscore":0
            },
            {
              "name": "1 - almost never",
              "sortorder": 2,
              "code": "code_1008",
              "totalscore":1
            },
            {
              "name": "2 - sometimes",
              "sortorder": 3,
              "code": "code_1009",
              "totalscore":2
              
            },
            {
              "name": "3 - fairly often",
              "sortorder": 4,
              "code": "code_1010",
              "totalscore":3
            },
            {
              "name": "4 - very often",
              "sortorder": 5,
              "code": "code_1011",
              "totalscore":4
            }
          ]
        },
        {
          "label": "In the last month, how often have you felt confident about your ability to handle  your personal problems?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "last_month_ability_to_handle_your_personal_problems",
          "sortorder": 4,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "totalscore":0
            },
            {
              "name": "0 - never",
              "sortorder": 1,
              "code": "code_1012",
              "totalscore":4
            },
            {
              "name": "1 - almost never",
              "sortorder": 2,
              "code": "code_1013",
              "totalscore":3
            },
            {
              "name": "2 - sometimes",
              "sortorder": 3,
              "code": "code_1014",
              "totalscore":2
            },
            {
              "name": "3 - fairly often",
              "sortorder": 4,
              "code": "code_1015",
              "totalscore":1
            },
            {
              "name": "4 - very often",
              "sortorder": 5,
              "code": "code_1016",
              "totalscore":0
              
            }
          ]
        },
        {
          "label": "In the last month, how often have you felt that things were going your way?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "last_month_things_were_going_your_way",
          "sortorder": 5,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "totalscore":0
            },
            {
              "name": "0 - never",
              "sortorder": 1,
              "code": "code_1017",
              "totalscore":4
            },
            {
              "name": "1 - almost never",
              "sortorder": 2,
              "code": "code_1018",
              "totalscore":3
            },
            {
              "name": "2 - sometimes",
              "sortorder": 3,
              "code": "code_1019",
              "totalscore":2
            },
            {
              "name": "3 - fairly often",
              "sortorder": 4,
              "code": "code_1020",
              "totalscore":1
            },
            {
              "name": "4 - very often",
              "sortorder": 5,
              "code": "code_1021",
              "totalscore":0
            }
          ]
        },
        {
          "label": "In the last month, how often have you found that you could not cope with  all the things that you had to do?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "last_month_could_not_cope_wit_all_the_things_that_you_had_to_do",
          "sortorder": 6,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "totalscore":0
            },
            {
              "name": "0 - never",
              "sortorder": 1,
              "code": "code_1022",
              "totalscore":0
            },
            {
              "name": "1 - almost never",
              "sortorder": 2,
              "code": "code_1023",
              "totalscore":1
            },
            {
              "name": "2 - sometimes",
              "sortorder": 3,
              "code": "code_1024",
              "totalscore":2
            },
            {
              "name": "3 - fairly often",
              "sortorder": 4,
              "code": "code_1025",
              "totalscore":3
            },
            {
              "name": "4 - very often",
              "sortorder": 5,
              "code": "code_1026",
              "totalscore":4
            }
          ]
        },
        {
          "label": "In the last month, how often have you been able to control irritations in  your life?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "last_month_control_irritations_in_your_life",
          "sortorder": 7,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "totalscore":0
            },
            {
              "name": "0 - never",
              "sortorder": 1,
              "code": "code_1027",
              "totalscore":4
            },
            {
              "name": "1 - almost never",
              "sortorder": 2,
              "code": "code_1028",
              "totalscore":3
            },
            {
              "name": "2 - sometimes",
              "sortorder": 3,
              "code": "code_1029",
              "totalscore":2
            },
            {
              "name": "3 - fairly often",
              "sortorder": 4,
              "code": "code_1030",
              "totalscore":1
            },
            {
              "name": "4 - very often",
              "sortorder": 5,
              "code": "code_1031",
              "totalscore":0
            }
          ]
        },
        {
          "label": "In the last month, how often have you felt that you were on top of things?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "last_month_you_were_on_top_of_things",
          "sortorder": 8,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "totalscore":0
            },
            {
              "name": "0 - never",
              "sortorder": 1,
              "code": "code_1032",
              "totalscore":4
            },
            {
              "name": "1 - almost never",
              "sortorder": 2,
              "code": "code_1033",
              "totalscore":3
            },
            {
              "name": "2 - sometimes",
              "sortorder": 3,
              "code": "code_1034",
              "totalscore":2
            },
            {
              "name": "3 - fairly often",
              "sortorder": 4,
              "code": "code_1035",
              "totalscore":1
            },
            {
              "name": "4 - very often",
              "sortorder": 5,
              "code": "code_1036",
              "totalscore":0
            }
          ]
        },
        {
          "label": "In the last month, how often have you been angered because of things that  happened that were outside of your control?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "last_month_angered_because_of_things_outside_of_your_control",
          "sortorder": 9,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "totalscore":0
            },
            {
              "name": "0 - never",
              "sortorder": 1,
              "code": "code_1037",
              "totalscore":0
            },
            {
              "name": "1 - almost never",
              "sortorder": 2,
              "code": "code_1038",
              "totalscore":1
            },
            {
              "name": "2 - sometimes",
              "sortorder": 3,
              "code": "code_1039",
              "totalscore":2
            },
            {
              "name": "3 - fairly often",
              "sortorder": 4,
              "code": "code_1040",
              "totalscore":3
            },
            {
              "name": "4 - very often",
              "sortorder": 5,
              "code": "code_1041",
              "totalscore":4
            }
          ]
        },
        {
          "label": "In the last month, how often have you felt difficulties were piling up so high that  you could not overcome them?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "last_month_you_felt_difficulties_were_piling_up_so_high",
          "sortorder": 10,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              "totalscore":0
            },
            {
              "name": "0 - never",
              "sortorder": 1,
              "code": "code_1042",
              "totalscore":0
            },
            {
              "name": "1 - almost never",
              "sortorder": 2,
              "code": "code_1043",
              "totalscore":1
            },
            {
              "name": "2 - sometimes",
              "sortorder": 3,
              "code": "code_1044",
              "totalscore":2
            },
            {
              "name": "3 - fairly often",
              "sortorder": 4,
              "code": "code_1045",
              "totalscore":3
            },
            {
              "name": "4 - very often",
              "sortorder": 5,
              "code": "code_1046",
              "totalscore":4
            }
          ]
        },
        {
          "label": "My total score is",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "totalscore",
          "sortorder": 11,
          "type": "NUMBER",
          "id":"totalscore",
          totalscore:true
        },
        {
          "label": "The Perceived Stress Scale",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "PSS_status",
          "sortorder": 12,
          "type": "SELECT",
          id:"PSS_status",
          isAutoCalculate:true,
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "low stress",
              "sortorder": 1,
              "code": "code_1047"
            },
            {
              "name": "moderate stress",
              "sortorder": 2,
              "code": "code_1048"
            },
            {
              "name": "high perceived stress",
              "sortorder": 3,
              "code": "code_1049"
            }
          ]
        }
        ,
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 13,
          "type": "TEXT"
        }],
      "name": "PSS",
      "label": "Perceived Stress Scale",
      "isRepeat": true
    },
    "DSM5": {
      "fields": [
        {
          "label": "what is your relationship with the individual?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "relationship_with_the_individual",
          "sortorder": 1,
          "type": "TEXT"
        },
        {
          "label": "In a typical week, approximately how much time do you spend with the individual?(hours/week)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "how_much_time_do_you_spend_with_the_individual",
          "sortorder": 2,
          "type": "TEXT"
        },
        {
          "label": "Little interest or pleasure in doing things?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "little_interestorpleasure_in_doing_things",
          "sortorder": 3,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1050"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1051"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1052"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1053"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1054"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1055"
            }
          ]
        },
        {
          "label": "Feeling down, depressed, or hopeless?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feelingdown_depressed_hopeless",
          "sortorder": 4,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1056"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1057"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1058"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1059"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1060"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1061"
            }
          ]
        },
        {
          "label": "Feeling more irritated, grouchy, or angry than usual?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feeling_more_irritated_grouchy_or_angry_than_usual",
          "sortorder": 5,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1062"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1063"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1064"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1065"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1066"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1067"
            }
          ]
        },
        {
          "label": "Sleeping less than usual, but still have a lot of energy?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "sleeping_less_than_usual_but_still_have_lot_of_energy",
          "sortorder": 6,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1068"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1069"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1070"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1071"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1072"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1073"
            }
          ]
        },
        {
          "label": "Starting lots more projects than usual or doing more risky things than  usual?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "starting_lots_more_projects",
          "sortorder": 7,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1074"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1075"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1076"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1077"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1078"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1079"
            }
          ]
        },
        {
          "label": "Feeling nervous, anxious, frightened, worried, or on edge?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feeling_nervous_anxious_frightened",
          "sortorder": 8,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1080"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1081"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1082"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1083"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1084"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1085"
            }
          ]
        },
        {
          "label": "Feeling panic or being frightened?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feeling_panic_or_being_frightened",
          "sortorder": 9,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1086"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1087"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1088"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1089"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1090"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1091"
            }
          ]
        },
        {
          "label": "Avoiding situations that make you anxious?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "avoiding_situations_that_make_you_anxious",
          "sortorder": 10,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1092"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1093"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1094"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1095"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1096"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1097"
            }
          ]
        },
        {
          "label": "Unexplained aches and pains (e.g., head, back, joints, abdomen, legs)?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "unexplained_aches_and_pains",
          "sortorder": 11,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1098"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1099"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1100"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1101"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1102"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1103"
            }
          ]
        },
        {
          "label": "Feeling that your illnesses are not being taken seriously enough?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feeling_that_your_illnesses_are_not_being_taken_seriously",
          "sortorder": 12,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1104"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1105"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1106"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1107"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1108"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1109"
            }
          ]
        },
        {
          "label": "Thoughts of actually hurting yourself?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "thoughts_of_actually_hurting_yourself",
          "sortorder": 13,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1110"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1111"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1112"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1113"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1114"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1115"
            }
          ]
        },
        {
          "label": "Hearing things other people couldn’t hear, such as voices even when no  one was around?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "hearing_things_other_people_couldnt_hear",
          "sortorder": 14,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1116"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1117"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1118"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1119"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1120"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1121"
            }
          ]
        },
        {
          "label": "Feeling that someone could hear your thoughts, or that you could hear  what another person was thinking?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feeling_that_someone_could_hear_your_thoughts",
          "sortorder": 15,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1122"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1123"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1124"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1125"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1126"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1127"
            }
          ]
        },
        {
          "label": "Problems with sleep that affected your sleep quality over all?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "problems_with_sleep_that_affected",
          "sortorder": 16,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1128"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1129"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1130"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1131"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1132"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1133"
            }
          ]
        },
        {
          "label": "Problems with memory (e.g., learning new information) or with location  (e.g., finding your way home)?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "problems_with_memory",
          "sortorder": 17,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1134"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1135"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1136"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1137"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1138"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1139"
            }
          ]
        },
        {
          "label": "Unpleasant thoughts, urges, or images that repeatedly enter your mind?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "unpleasant_thoughts",
          "sortorder": 18,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1140"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1141"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1142"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1143"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1144"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1145"
            }
          ]
        },
        {
          "label": "Feeling driven to perform certain behaviors or mental acts over and over  again?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feeling_driven_to_perform_certain_behaviors",
          "sortorder": 19,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1146"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1147"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1148"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1149"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1150"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1151"
            }
          ]
        },
        {
          "label": "Feeling detached or distant from yourself, your body, your physical  surroundings, or your memories?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feeling_detached_or_distant_from_yourself",
          "sortorder": 20,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1152"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1153"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1154"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1155"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1156"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1157"
            }
          ]
        },
        {
          "label": "Not knowing who you really are or what you want out of life?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "not_knowing_who_you_really_are",
          "sortorder": 21,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1158"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1159"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1160"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1161"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1162"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1163"
            }
          ]
        },
        {
          "label": "Not feeling close to other people or enjoying your relationships with them?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "not_feeling_close_to_other_people",
          "sortorder": 22,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1164"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1165"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1166"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1167"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1168"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1169"
            }
          ]
        },
        {
          "label": "Drinking at least 4 drinks of any kind of alcohol in a single day?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "drinks4_of_any_kind_of_alcohol_in_asingle_day",
          "sortorder": 23,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1170"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1171"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1172"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1173"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1174"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1175"
            }
          ]
        },
        {
          "label": "Smoking any cigarettes, a cigar, or pipe, or using snuff or chewing tobacco?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "smoking_any_cigarettes",
          "sortorder": 24,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1176"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1177"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1178"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1179"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1180"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1181"
            }
          ]
        },
        {
          "label": "Using any of the following medicines ON YOUR OWN, that is, without a  doctor’s prescription, in greater amounts or longer than prescribed [e.g.,  painkillers (like Vicodin), stimulants (like Ritalin or Adderall), sedatives or  tranquilizers (like sleeping pills or Valium), or drugs like marijuana, cocaine  or crack, club drugs (like ecstasy), hallucinogens (like LSD), heroin,  inhalants or solvents (like glue), or methamphetamine (like speed)]?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "using_any_of_the_following_medicines_on_your_own",
          "sortorder": 25,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "None - Not at all",
              "sortorder": 1,
              "code": "code_1182"
            },
            {
              "name": "Slight - Rare",
              "sortorder": 2,
              "code": "code_1183"
            },
            {
              "name": " less than a day or two",
              "sortorder": 3,
              "code": "code_1184"
            },
            {
              "name": "Mild - Several days",
              "sortorder": 4,
              "code": "code_1185"
            },
            {
              "name": "Moderate - More than half the days",
              "sortorder": 5,
              "code": "code_1186"
            },
            {
              "name": "Severe - Nearly every day",
              "sortorder": 6,
              "code": "code_1187"
            }
          ]
        },
        {
          "label": "Scoring",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "DSM_score",
          "sortorder": 26,
          "type": "NUMBER"
        }
        ,
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 27,
          "type": "TEXT"
        }],
      "name": "DSM5",
      "label": "DSM-5 Self-Rated Level 1 Cross-Cutting Symptom Measure—Adult",
      "isRepeat": true
    },
    "WHODAS": {
      "fields": [
        {
          "label": "Concentrating on doing something for ten  minutes?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "concentrating_on_doing_something_for_ten_minutes",
          "sortorder": 1,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              d1_score:0,
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1188",
              d1_score:1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1189",
              d1_score:2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1190",
              d1_score:3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1191",
              d1_score:4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1192",
              d1_score:5
            }
          ]
        },
        {
          "label": "Remembering to do important things?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "Remembering_to_do_important_things",
          "sortorder": 2,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              d1_score:0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1193",
              d1_score:1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1194",
              d1_score:2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1195",
              d1_score:3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1196",
              d1_score:4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1197",
              d1_score:5
            }
          ]
        },
        {
          "label": "Analyzing and finding solutions to problems in  day-to-day life?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "analyzing_and_finding_solutions_to_problems",
          "sortorder": 3,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              d1_score:0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1198",
              d1_score:1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1199",
              d1_score:2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1200",
              d1_score:3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1201",
              d1_score:4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1202",
              d1_score:5
            }
          ]
        },
        {
          "label": "Learning a new task, for example, learning how  to get to a new place?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "learning_a_new_task",
          "sortorder": 4,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              d1_score:1
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1203",
              d1_score:1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1204",
              d1_score:2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1205",
              d1_score:3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1206",
              d1_score:4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1207",
              d1_score:5
            }
          ]
        },
        {
          "label": "Generally understanding what people say?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "generally_understanding",
          "sortorder": 5,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              d1_score:0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1208",
              d1_score:1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1209",
              d1_score:2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1210",
              d1_score:3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1211",
              d1_score:4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1212",
              d1_score:5
            }
          ]
        },
        {
          "label": "Starting and maintaining a conversation?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "starting_and_maintaining",
          "sortorder": 6,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              d1_score:0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1213",
              d1_score:1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1214",
              d1_score:2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1215",
              d1_score:3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1216",
              d1_score:4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1217",
              d1_score:5
            }
          ]
        },
        {
          "label": "Raw Domain Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          id:"D1_raw_domain_score",
          "name": "D1_raw_domain_score",
          "sortorder": 7,
          "type": "NUMBER",
          isAutoCalculate:true
        },
        {
          "label": "Average Domain Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          id:"D1_average_domain_score",
          "name": "D1_average_domain_score",
          "sortorder": 8,
          "type": "NUMBER",
          isAutoCalculate:true
        },
        {
          "label": "Standing for long periods, such as 30 minutes?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "standing_for_long_periods",
          "sortorder": 9,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d2_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1219",
              "d2_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1220",
              "d2_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1221",
              "d2_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1222",
              "d2_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1223",
              "d2_score":5
            }
          ]
        },
        {
          "label": "Standing up from sitting down?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "standing_up_from_sitting_down",
          "sortorder": 10,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d2_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1224",
              "d2_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1225",
              "d2_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1226",
              "d2_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1227",
              "d2_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1228",
              "d2_score":5
            }
          ]
        },
        {
          "label": "Moving around inside your home?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "moving_around_inside_your_home",
          "sortorder": 11,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d2_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1229",
              "d2_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1230",
              "d2_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1231",
              "d2_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1232",
              "d2_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1233",
              "d2_score":5
            }
          ]
        },
        {
          "label": "Getting out of your home?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "getting_out_of_your_home",
          "sortorder": 12,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d2_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1234",
              "d2_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1235",
              "d2_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1236",
              "d2_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1237",
              "d2_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1238",
              "d2_score":5
            }
          ]
        },
        {
          "label": "Walking a long distance, such as a kilometer (or  equivalent)?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "walking_a_long_distance",
          "sortorder": 13,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d2_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1239",
              "d2_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1240",
              "d2_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1241",
              "d2_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1242",
              "d2_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1243",
              "d2_score":5
            }
          ]
        },
        {
          "label": "Raw Domain Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "D2_raw_domain_score",
          "sortorder": 14,
          "type": "NUMBER",
          id:"D2_raw_domain_score",
          isAutoCalculate:true
        },
        {
          "label": "Average Domain Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "D2_average_domain_score",
          "sortorder": 15,
          "type": "NUMBER",
          id:"D2_average_domain_score",
          isAutoCalculate:true
        },
        {
          "label": "Washing your whole body?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "washing_your_whole_body",
          "sortorder": 16,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d3_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1245",
              "d3_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1246",
              "d3_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1247",
              "d3_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1248",
              "d3_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1249",
              "d3_score":5
            }
          ]
        },
        {
          "label": "Getting dressed?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "getting_dressed",
          "sortorder": 17,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d3_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1250",
              "d3_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1251",
              "d3_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1252",
              "d3_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1253",
              "d3_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1254",
              "d3_score":5
            }
          ]
        },
        {
          "label": "Eating?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "eating",
          "sortorder": 18,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d3_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1255",
              "d3_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1256",
              "d3_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1257",
              "d3_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1258",
              "d3_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1259",
              "d3_score":5
            }
          ]
        },
        {
          "label": "Staying by yourself for a few days?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "staying_by_yourself_for_a_few_days",
          "sortorder": 19,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d3_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1260",
              "d3_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1261",
              "d3_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1262",
              "d3_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1263",
              "d3_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1264",
              "d3_score":5
            }
          ]
        },
        {
          "label": "Raw Domain Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "D3_raw_domain_score",
          "sortorder": 20,
          "type": "NUMBER",
          id:"D3_raw_domain_score",
          isAutoCalculate:true
        },
        {
          "label": "Average Domain Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "D3_average_domain_score",
          "sortorder": 21,
          "type": "NUMBER",
          id:"D3_average_domain_score",
          isAutoCalculate:true
        },
        {
          "label": "Dealing with people you do not know?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "dealing_with_people_you_do_not_know",
          "sortorder": 22,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d4_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1266",
              "d4_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1267",
              "d4_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1268",
              "d4_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1269",
              "d4_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1270",
              "d4_score":5
            }
          ]
        },
        {
          "label": "Maintaining a friendship?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "maintaining_a_friendship",
          "sortorder": 23,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d4_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1271",
              "d4_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1272",
              "d4_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1273",
              "d4_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1274",
              "d4_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1275",
              "d4_score":5
            }
          ]
        },
        {
          "label": "Getting along with people who are close to  you?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "getting_along_with_people_who_are_close_to_you",
          "sortorder": 24,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d4_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1276",
              "d4_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1277",
              "d4_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1278",
              "d4_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1279",
              "d4_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1280",
              "d4_score":5
            }
          ]
        },
        {
          "label": "Making new friends?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "making_new_friends",
          "sortorder": 25,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d4_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1281",
              "d4_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1282",
              "d4_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1283",
              "d4_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1284",
              "d4_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1285",
              "d4_score":5
            }
          ]
        },
        {
          "label": "Sexual activities?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "sexual_activities",
          "sortorder": 26,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d4_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1286",
              "d4_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1287",
              "d4_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1288",
              "d4_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1289",
              "d4_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1290",
              "d4_score":5
            }
          ]
        },
        {
          "label": "Raw Domain Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "D4_raw_domain_score",
          "sortorder": 27,
          "type": "NUMBER",
          "id":"D4_raw_domain_score",
          isAutoCalculate:true

        },
        {
          "label": "Average Domain Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "D4_average_domain_score",
          "sortorder": 28,
          "type": "NUMBER",
          "id":"D4_average_domain_score",
          isAutoCalculate:true
        },
        {
          "label": "Taking care of your household responsibilities?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "taking_care_of_your_household",
          "sortorder": 29,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d5_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1292",
              "d5_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1293",
              "d5_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1294",
              "d5_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1295",
              "d5_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1296",
              "d5_score":5
            }
          ]
        },
        {
          "label": "Doing most important household tasks well?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "doing_most_important_household",
          "sortorder": 30,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d5_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1297",
              "d5_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1298",
              "d5_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1299",
              "d5_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1300",
              "d5_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1301",
              "d5_score":5
            }
          ]
        },
        {
          "label": "Getting all of the household work done that  you needed to do?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "getting_all_of_the_household_work_done_that_you_needed_to_do",
          "sortorder": 31,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d5_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1302",
              "d5_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1303",
              "d5_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1304",
              "d5_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1305",
              "d5_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1306",
              "d5_score":5
            }
          ]
        },
        {
          "label": "Getting your household work done as quickly as  needed?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "getting_your_household_work_done_as_quickly",
          "sortorder": 32,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d5_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1307",
              "d5_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1308",
              "d5_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1309",
              "d5_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1310",
              "d5_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1311",
              "d5_score":5
            }
          ]
        },
        {
          "label": "Raw Domain Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "D5_raw_domain_score",
          "sortorder": 33,
          "type": "NUMBER",
          "id":"D5_raw_domain_score",
          isAutoCalculate:true
        },
        {
          "label": "Average Domain Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "D5_average_domain_score",
          "sortorder": 34,
          "type": "NUMBER",
          "id":"D5_average_domain_score",
          isAutoCalculate:true
        },
        {
          "label": "Your day-to-day work/school?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "your_day_to_day_work_school",
          "sortorder": 35,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d5_1_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1313",
              "d5_1_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1314",
              "d5_1_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1315",
              "d5_1_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1316",
              "d5_1_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1317",
              "d5_1_score":5
            }
          ]
        },
        {
          "label": "Doing your most important work/school tasks  well?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "doing_your_most_important_work",
          "sortorder": 36,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d5_1_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1318",
              "d5_1_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1319",
              "d5_1_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1320",
              "d5_1_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1321",
              "d5_1_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1322",
              "d5_1_score":5
            }
          ]
        },
        {
          "label": "Getting all of the work done that you need to  do?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "getting_all_of_the_work_done_that_you_needed_to_do",
          "sortorder": 37,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d5_1_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1323",
              "d5_1_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1324",
              "d5_1_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1325",
              "d5_1_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1326",
              "d5_1_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1327",
              "d5_1_score":5
            }
          ]
        },
        {
          "label": "Getting your work done as quickly as needed?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "getting_your_work_done_as_quickly",
          "sortorder": 38,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d5_1_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1328",
              "d5_1_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1329",
              "d5_1_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1330",
              "d5_1_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1331",
              "d5_1_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1332",
              "d5_1_score":5
            }
          ]
        },
        {
          "label": "Raw Domain Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "D5_1_raw_domain_score",
          "sortorder": 39,
          "type": "NUMBER",
          "id":"D5_1_raw_domain_score",
          isAutoCalculate:true
        },
        {
          "label": "Average Domain Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "D5_1_average_domain_score",
          "sortorder": 40,
          "type": "NUMBER",
          "id":"D5_1_average_domain_score",
          isAutoCalculate:true
        },
        {
          "label": "How much of a problem did you have in joining  in community activities (for example, festivities,  religious, or other activities) in the same way as  anyone else can?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "how_much_of_a_problem_did_you_have_in_joining",
          "sortorder": 41,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d6_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1333",
              "d6_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1334",
              "d6_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1335",
              "d6_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1336",
              "d6_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1337",
              "d6_score":5
            }
          ]
        },
        {
          "label": "How much of a problem did you have because  of barriers or hindrances around you?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "barriers_or_hindrances_around_you",
          "sortorder": 42,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d6_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1338",
              "d6_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1339",
              "d6_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1340",
              "d6_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1341",
              "d6_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1342",
              "d6_score":5
            }
          ]
        },
        {
          "label": "How much of a problem did you have living  with dignity because of the attitudes and  actions of others?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "how_much_of_a_problem_did_you_have_living_with_dignity",
          "sortorder": 43,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d6_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1343",
              "d6_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1344",
              "d6_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1345",
              "d6_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1346",
              "d6_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1347",
              "d6_score":5
            }
          ]
        },
        {
          "label": "How much time did you spend on your health  condition or its consequences?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "time_spend_on_your_health_condition_its_consequences",
          "sortorder": 44,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d6_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1348",
              "d6_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1349",
              "d6_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1350",
              "d6_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1351",
              "d6_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1352",
              "d6_score":5
            }
          ]
        },
        {
          "label": "How much have you been emotionally affected  by your health condition?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "emotionally_effected_by_health",
          "sortorder": 45,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d6_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1353",
              "d6_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1354",
              "d6_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1355",
              "d6_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1356",
              "d6_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1357",
              "d6_score":5
            }
          ]
        },
        {
          "label": "How much has your health been a drain on the  financial resources of you or your family?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "your_health_been_drain_on_the_financial_resources_of_you_family",
          "sortorder": 46,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d6_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1358",
              "d6_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1359",
              "d6_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1360",
              "d6_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1361",
              "d6_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1362",
              "d6_score":5
            }
          ]
        },
        {
          "label": "How much of a problem did your family have  because of your health problems?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "your_family_have_because_of_your_health_problems",
          "sortorder": 47,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d6_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1363",
              "d6_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1364",
              "d6_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1365",
              "d6_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1366",
              "d6_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1367",
              "d6_score":5
            }
          ]
        },
        {
          "label": "How much of a problem did you have in doing  things by yourself for relaxation or pleasure?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "problem_did_you_have_in_doing_things_by_yourself",
          "sortorder": 48,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "d6_score":0
            },
            {
              "name": "1-None",
              "sortorder": 1,
              "code": "code_1368",
              "d6_score":1
            },
            {
              "name": "2-Mild",
              "sortorder": 2,
              "code": "code_1369",
              "d6_score":2
            },
            {
              "name": "3-Moderate",
              "sortorder": 3,
              "code": "code_1370",
              "d6_score":3
            },
            {
              "name": "4-Severe",
              "sortorder": 4,
              "code": "code_1371",
              "d6_score":4
            },
            {
              "name": "5-Extreme or cannot do",
              "sortorder": 5,
              "code": "code_1372",
              "d6_score":5
            }
          ]
        },
        {
          "label": "Raw Domain Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "D6_raw_domain_score",
          "sortorder": 49,
          "type": "NUMBER",
          "id":"D6_raw_domain_score",
          isAutoCalculate:true
        },
        {
          "label": "Average Domain Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "D6_average_domain_score",
          "sortorder": 50,
          "type": "NUMBER",
          "id":"D6_average_domain_score",
          isAutoCalculate:true
        },
        {
          "label": "General Disability Raw Domain Score (Total):",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "WHODAS_raw_domain_score",
          "sortorder": 51,
          "type": "NUMBER",
          "id":"WHODAS_raw_domain_score",
          isAutoCalculate:true
        },
        {
          "label": "General Disability Averag Domain Score (Total):",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "WHODAS_average_domain_score",
          "sortorder": 52,
          "type": "NUMBER",
          "id":"WHODAS_average_domain_score",
          isAutoCalculate:true
        }
        ,
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 53,
          "type": "TEXT"
        }],
      "name": "WHODAS",
      "label": "World Health Organization Disability Assessment Schedule 2.0  36-item version, self-administered ",
      "isRepeat": true
    },
    "MBI": {
      "fields": [
        {
          "label": "I feel emotionally exhausted because of my work",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_emotionally_exhausted_because_of_my_work",
          "sortorder": 1,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              occupationalexhaustionscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1373",
              occupationalexhaustionscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1374",
              occupationalexhaustionscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1375",
              occupationalexhaustionscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1376",
              occupationalexhaustionscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1377",
              occupationalexhaustionscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1378",
              occupationalexhaustionscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1379",
              occupationalexhaustionscore:6
            }
          ]
        },
        {
          "label": "I feel worn out at the end of a working day",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_worn_out_at_the_end_of_a_working_day",
          "sortorder": 2,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              occupationalexhaustionscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1380",
              occupationalexhaustionscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1381",
              occupationalexhaustionscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1382",
              occupationalexhaustionscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1383",
              occupationalexhaustionscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1384",
              occupationalexhaustionscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1385",
              occupationalexhaustionscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1386",
              occupationalexhaustionscore:6
            }
          ]
        },
        {
          "label": "I feel tired as soon as I get up in the morning and see a new working day stretched out in front of me",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_tired_as_soon_as_I_get_up_in_the_morning",
          "sortorder": 3,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              occupationalexhaustionscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1387",
              occupationalexhaustionscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1388",
              occupationalexhaustionscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1389",
              occupationalexhaustionscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1390",
              occupationalexhaustionscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1391",
              occupationalexhaustionscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1392",
              occupationalexhaustionscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1393",
              occupationalexhaustionscore:6
            }
          ]
        },
        {
          "label": "I can easily understand the actions of my colleagues/supervisors",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "can_easily_understand_the_actions_of_my_colleagues_supervisors",
          "sortorder": 4,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              accomplishmentscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1394",
              accomplishmentscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1395",
              accomplishmentscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1396",
              accomplishmentscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1397",
              accomplishmentscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1398",
              accomplishmentscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1399",
              accomplishmentscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1400",
              accomplishmentscore:6
            }
          ]
        },
        {
          "label": "I get the feeling that I treat some clients/colleagues impersonally, as if they were objects",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "get_the_feeling_that_I_treat_some_clients_impersonally",
          "sortorder": 5,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              depersonalisationscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1401",
              depersonalisationscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1402",
              depersonalisationscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1403",
              depersonalisationscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1404",
              depersonalisationscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1405",
              depersonalisationscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1406",
              depersonalisationscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1407",
              depersonalisationscore:6
            }
          ]
        },
        {
          "label": "Working with people the whole day is stressful for me",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "working_with_people_the_whole_day_is_stressful_for_me",
          "sortorder": 6,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              occupationalexhaustionscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1408",
              occupationalexhaustionscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1409",
              occupationalexhaustionscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1410",
              occupationalexhaustionscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1411",
              occupationalexhaustionscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1412",
              occupationalexhaustionscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1413",
              occupationalexhaustionscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1414",
              occupationalexhaustionscore:6
            }
          ]
        },
        {
          "label": "I deal with other people’s problems successfully",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "deal_with_other_peoples_problems_successfully",
          "sortorder": 7,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              accomplishmentscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1415",
              accomplishmentscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1416",
              accomplishmentscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1417",
              accomplishmentscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1418",
              accomplishmentscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1419",
              accomplishmentscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1420",
              accomplishmentscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1421",
              accomplishmentscore:6
            }
          ]
        },
        {
          "label": "I feel burned out because of my work",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_burned_out_because_of_my_work",
          "sortorder": 8,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              occupationalexhaustionscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1422",
              occupationalexhaustionscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1423",
              occupationalexhaustionscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1424",
              occupationalexhaustionscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1425",
              occupationalexhaustionscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1426",
              occupationalexhaustionscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1427",
              occupationalexhaustionscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1428",
              occupationalexhaustionscore:6
            }
          ]
        },
        {
          "label": "I feel that I influence other people positively through my work",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_that_I_influence_other_people",
          "sortorder": 9,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              accomplishmentscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1429",
              accomplishmentscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1430",
              accomplishmentscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1431",
              accomplishmentscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1432",
              accomplishmentscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1433",
              accomplishmentscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1434",
              accomplishmentscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1435",
              accomplishmentscore:6
            }
          ]
        },
        {
          "label": "I have become more callous to people since I have started doing this job",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "have_become_more_callous_to_people",
          "sortorder": 10,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              depersonalisationscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1436",
              depersonalisationscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1437",
              depersonalisationscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1438",
              depersonalisationscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1439",
              depersonalisationscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1440",
              depersonalisationscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1441",
              depersonalisationscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1442",
              depersonalisationscore:6
            }
          ]
        },
        {
          "label": "I’m afraid that my work makes me emotionally harder",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "afraid_that_my_work_makes_me_emotionally_harder",
          "sortorder": 11,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              depersonalisationscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1443",
              depersonalisationscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1444",
              depersonalisationscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1445",
              depersonalisationscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1446",
              depersonalisationscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1447",
              depersonalisationscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1448",
              depersonalisationscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1449",
              depersonalisationscore:6
            }
          ]
        },
        {
          "label": "I feel full of energy",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_full_of_energy",
          "sortorder": 12,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              accomplishmentscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1450",
              accomplishmentscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1451",
              accomplishmentscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1452",
              accomplishmentscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1453",
              accomplishmentscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1454",
              accomplishmentscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1455",
              accomplishmentscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1456",
              accomplishmentscore:6
            }
          ]
        },
        {
          "label": "I feel frustrated by my work",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_frustrated_by_my_work",
          "sortorder": 13,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              occupationalexhaustionscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1457",
              occupationalexhaustionscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1458",
              occupationalexhaustionscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1459",
              occupationalexhaustionscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1460",
              occupationalexhaustionscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1461",
              occupationalexhaustionscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1462",
              occupationalexhaustionscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1463",
              occupationalexhaustionscore:6
            }
          ]
        },
        {
          "label": "I get the feeling that I work too hard",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "get_the_feeling_that_I_work_too_hard",
          "sortorder": 14,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              occupationalexhaustionscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1464",
              occupationalexhaustionscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1465",
              occupationalexhaustionscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1466",
              occupationalexhaustionscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1467",
              occupationalexhaustionscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1468",
              occupationalexhaustionscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1469",
              occupationalexhaustionscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1470",
              occupationalexhaustionscore:6
            }
          ]
        },
        {
          "label": "I’m not really interested in what is going on with many of my colleagues",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "am_not_really_interested_in_what_is_going_on_with_many",
          "sortorder": 15,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              depersonalisationscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1471",
              depersonalisationscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1472",
              depersonalisationscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1473",
              depersonalisationscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1474",
              depersonalisationscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1475",
              depersonalisationscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1476",
              depersonalisationscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1477",
              depersonalisationscore:6
            }
          ]
        },
        {
          "label": "Being in direct contact with people at work is too stressful",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "ing_in_direct_contact_with_people_at_work_is_too_stressful",
          "sortorder": 16,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              occupationalexhaustionscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1478",
              occupationalexhaustionscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1479",
              occupationalexhaustionscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1480",
              occupationalexhaustionscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1481",
              occupationalexhaustionscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1482",
              occupationalexhaustionscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1483",
              occupationalexhaustionscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1484",
              occupationalexhaustionscore:6
            }
          ]
        },
        {
          "label": "I find it easy to build a relaxed atmosphere in my working environment",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "find_it_easy_to_build_a_relaxed_atmosphere_in_my_working",
          "sortorder": 17,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              accomplishmentscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1485",
              accomplishmentscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1486",
              accomplishmentscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1487",
              accomplishmentscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1488",
              accomplishmentscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1489",
              accomplishmentscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1490",
              accomplishmentscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1491",
              accomplishmentscore:6
            }
          ]
        },
        {
          "label": "I feel stimulated when I been working closely with my colleagues",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_stimulated_when_I_been_working_closely_with_my_colleagues",
          "sortorder": 18,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              accomplishmentscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1492",
              accomplishmentscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1493",
              accomplishmentscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1494",
              accomplishmentscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1495",
              accomplishmentscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1496",
              accomplishmentscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1497",
              accomplishmentscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1498",
              accomplishmentscore:6
            }
          ]
        },
        {
          "label": "I have achieved many rewarding objectives in my work",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "have_achieved_many_rewarding_objectives_in_my_work",
          "sortorder": 19,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              accomplishmentscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1499",
              accomplishmentscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1500",
              accomplishmentscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1501",
              accomplishmentscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1502",
              accomplishmentscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1503",
              accomplishmentscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1504",
              accomplishmentscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1505",
              accomplishmentscore:6
            }
          ]
        },
        {
          "label": "I feel as if I’m at my wits‘ end",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "feel_as_if_Im_at_my_wits_end",
          "sortorder": 20,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              occupationalexhaustionscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1506",
              occupationalexhaustionscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1507",
              occupationalexhaustionscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1508",
              occupationalexhaustionscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1509",
              occupationalexhaustionscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1510",
              occupationalexhaustionscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1511",
              occupationalexhaustionscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1512",
              occupationalexhaustionscore:6
            }
          ]
        },
        {
          "label": "In my work I am very relaxed when dealing with emotional problems",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "my_work_I_am_very_relaxed_when_dealing_with_emotional_problems",
          "sortorder": 21,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              accomplishmentscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1513",
              accomplishmentscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1514",
              accomplishmentscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1515",
              accomplishmentscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1516",
              accomplishmentscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1517",
              accomplishmentscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1518",
              accomplishmentscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1519",
              accomplishmentscore:6
            }
          ]
        },
        {
          "label": "I have the feeling that my colleagues blame me for some of their problems",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "have_the_feeling_that_my_colleagues",
          "sortorder": 22,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": "",
              depersonalisationscore:0
            },
            {
              "name": "0 = Never",
              "sortorder": 1,
              "code": "code_1520",
              depersonalisationscore:0
            },
            {
              "name": "1 = At least a few times a year",
              "sortorder": 2,
              "code": "code_1521",
              depersonalisationscore:1
            },
            {
              "name": "2 = At least once a month",
              "sortorder": 3,
              "code": "code_1522",
              depersonalisationscore:2
            },
            {
              "name": "3 = Several times a month",
              "sortorder": 4,
              "code": "code_1523",
              depersonalisationscore:3
            },
            {
              "name": "4 = Once a week",
              "sortorder": 5,
              "code": "code_1524",
              depersonalisationscore:4
            },
            {
              "name": "5 = Several times a week",
              "sortorder": 6,
              "code": "code_1525",
              depersonalisationscore:5
            },
            {
              "name": "6 = Every day",
              "sortorder": 7,
              "code": "code_1526",
              depersonalisationscore:6
            }
          ]
        },
        // {
        //   "label": "Total Score",
        //   "isMandatory": false,
        //   "show": true,
        //   "programId": 0,
        //   "name": "totalScore",
        //   "sortorder": 23,
        //   "type": "NUMBER"
        // },
        {
          "label": "Occupational exhaustion",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "occupationalExhaustion",
          "sortorder": 24,
          id:"occupationalExhaustion_scale",
          isAutoCalculate:true,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Low degree",
              "sortorder": 1,
              "code": "code_1527"
            },
            {
              "name": "Moderate degree",
              "sortorder": 2,
              "code": "code_1528"
            },
            {
              "name": "High degree",
              "sortorder": 3,
              "code": "code_1529"
            }
          ]
        },
        {
          "label": "Overall score for occupational exhaustion (EE)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "occupational_exhaustion_score",
          "sortorder": 25,
          id:"occupational_exhaustion_score",
          isAutoCalculate:true,
          "type": "NUMBER"
        },
        {
          "label": "Depersonalisation",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "depersonalisation",
          id:"depersonalisation_scale",
          "sortorder": 26,
          isAutoCalculate:true,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Low degree",
              "sortorder": 1,
              "code": "code_1530"
            },
            {
              "name": "Moderate degree",
              "sortorder": 2,
              "code": "code_1531"
            },
            {
              "name": "High degree",
              "sortorder": 3,
              "code": "code_1532"
            }
          ]
        },
        {
          "label": "Overall score for depersonalisation / loss of empathy (DP)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "depersonalisation_score",
          id:"depersonalisation_score",
          isAutoCalculate:true,
          "sortorder": 27,
          "type": "NUMBER"
        },
        {
          "label": "Personal accomplishment assessment",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          isAutoCalculate:true,
          "name": "Personal_accomplishment_assessment",
          id:"Personal_accomplishment_assessment",
          "sortorder": 28,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Low degree",
              "sortorder": 1,
              "code": "code_1533"
            },
            {
              "name": "Moderate degree",
              "sortorder": 2,
              "code": "code_1534"
            },
            {
              "name": "High degree",
              "sortorder": 3,
              "code": "code_1535"
            }
          ]
        },
        {
          "label": "Overall score personal accomplishment assessment (PA)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "accomplishment_score",
          "sortorder": 29,
          id:"accomplishment_score",
          isAutoCalculate:true,
          "type": "NUMBER"
        }
        ,
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 30,
          "type": "TEXT"
        }],
      "name": "MBI",
      "label": "The Maslach Burnout Inventory",
      "isRepeat": true
    },
    "SOS": {
      "fields": [
        {
          "label": "Headaches",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "headaches",
          "sortorder": 1,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Almost all day or every day",
              "sortorder": 1,
              "code": "code_1536"
            },
            {
              "name": "Once or twice daily",
              "sortorder": 2,
              "code": "code_1537"
            },
            {
              "name": "Every night or day",
              "sortorder": 3,
              "code": "code_1538"
            },
            {
              "name": "2-3 times per week",
              "sortorder": 4,
              "code": "code_1539"
            },
            {
              "name": "Once a week",
              "sortorder": 5,
              "code": "code_1540"
            },
            {
              "name": "Once a month",
              "sortorder": 6,
              "code": "code_1541"
            },
            {
              "name": "Never",
              "sortorder": 7,
              "code": "code_1542"
            }
          ]
        },
        {
          "label": "Tense muscles, sore neck and back",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "tense",
          "sortorder": 2,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Almost all day or every day",
              "sortorder": 1,
              "code": "code_1543"
            },
            {
              "name": "Once or twice daily",
              "sortorder": 2,
              "code": "code_1544"
            },
            {
              "name": "Every night or day",
              "sortorder": 3,
              "code": "code_1545"
            },
            {
              "name": "2-3 times per week",
              "sortorder": 4,
              "code": "code_1546"
            },
            {
              "name": "Once a week",
              "sortorder": 5,
              "code": "code_1547"
            },
            {
              "name": "Once a month",
              "sortorder": 6,
              "code": "code_1548"
            },
            {
              "name": "Never",
              "sortorder": 7,
              "code": "code_1549"
            }
          ]
        },
        {
          "label": "Fatigue",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "fatigue",
          "sortorder": 3,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Almost all day or every day",
              "sortorder": 1,
              "code": "code_1550"
            },
            {
              "name": "Once or twice daily",
              "sortorder": 2,
              "code": "code_1551"
            },
            {
              "name": "Every night or day",
              "sortorder": 3,
              "code": "code_1552"
            },
            {
              "name": "2-3 times per week",
              "sortorder": 4,
              "code": "code_1553"
            },
            {
              "name": "Once a week",
              "sortorder": 5,
              "code": "code_1554"
            },
            {
              "name": "Once a month",
              "sortorder": 6,
              "code": "code_1555"
            },
            {
              "name": "Never",
              "sortorder": 7,
              "code": "code_1556"
            }
          ]
        },
        {
          "label": "Anxiety, worry,phobias",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "anxiet_worry",
          "sortorder": 4,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Almost all day or every day",
              "sortorder": 1,
              "code": "code_1557"
            },
            {
              "name": "Once or twice daily",
              "sortorder": 2,
              "code": "code_1558"
            },
            {
              "name": "Every night or day",
              "sortorder": 3,
              "code": "code_1559"
            },
            {
              "name": "2-3 times per week",
              "sortorder": 4,
              "code": "code_1560"
            },
            {
              "name": "Once a week",
              "sortorder": 5,
              "code": "code_1561"
            },
            {
              "name": "Once a month",
              "sortorder": 6,
              "code": "code_1562"
            },
            {
              "name": "Never",
              "sortorder": 7,
              "code": "code_1563"
            }
          ]
        },
        {
          "label": "Difficulty falling asleep",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "difficulty_falling",
          "sortorder": 5,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Almost all day or every day",
              "sortorder": 1,
              "code": "code_1564"
            },
            {
              "name": "Once or twice daily",
              "sortorder": 2,
              "code": "code_1565"
            },
            {
              "name": "Every night or day",
              "sortorder": 3,
              "code": "code_1566"
            },
            {
              "name": "2-3 times per week",
              "sortorder": 4,
              "code": "code_1567"
            },
            {
              "name": "Once a week",
              "sortorder": 5,
              "code": "code_1568"
            },
            {
              "name": "Once a month",
              "sortorder": 6,
              "code": "code_1569"
            },
            {
              "name": "Never",
              "sortorder": 7,
              "code": "code_1570"
            }
          ]
        },
        {
          "label": "Irritability",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "irritability",
          "sortorder": 6,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Almost all day or every day",
              "sortorder": 1,
              "code": "code_1571"
            },
            {
              "name": "Once or twice daily",
              "sortorder": 2,
              "code": "code_1572"
            },
            {
              "name": "Every night or day",
              "sortorder": 3,
              "code": "code_1573"
            },
            {
              "name": "2-3 times per week",
              "sortorder": 4,
              "code": "code_1574"
            },
            {
              "name": "Once a week",
              "sortorder": 5,
              "code": "code_1575"
            },
            {
              "name": "Once a month",
              "sortorder": 6,
              "code": "code_1576"
            },
            {
              "name": "Never",
              "sortorder": 7,
              "code": "code_1577"
            }
          ]
        },
        {
          "label": "Insomnia",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "insomnia",
          "sortorder": 7,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Almost all day or every day",
              "sortorder": 1,
              "code": "code_1578"
            },
            {
              "name": "Once or twice daily",
              "sortorder": 2,
              "code": "code_1579"
            },
            {
              "name": "Every night or day",
              "sortorder": 3,
              "code": "code_1580"
            },
            {
              "name": "2-3 times per week",
              "sortorder": 4,
              "code": "code_1581"
            },
            {
              "name": "Once a week",
              "sortorder": 5,
              "code": "code_1582"
            },
            {
              "name": "Once a month",
              "sortorder": 6,
              "code": "code_1583"
            },
            {
              "name": "Never",
              "sortorder": 7,
              "code": "code_1584"
            }
          ]
        },
        {
          "label": "Bouts of anger/hostility",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "bouts_anger_hostility",
          "sortorder": 8,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Almost all day or every day",
              "sortorder": 1,
              "code": "code_1585"
            },
            {
              "name": "Once or twice daily",
              "sortorder": 2,
              "code": "code_1586"
            },
            {
              "name": "Every night or day",
              "sortorder": 3,
              "code": "code_1587"
            },
            {
              "name": "2-3 times per week",
              "sortorder": 4,
              "code": "code_1588"
            },
            {
              "name": "Once a week",
              "sortorder": 5,
              "code": "code_1589"
            },
            {
              "name": "Once a month",
              "sortorder": 6,
              "code": "code_1590"
            },
            {
              "name": "Never",
              "sortorder": 7,
              "code": "code_1591"
            }
          ]
        },
        {
          "label": "Boredom,depression",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "boredom",
          "sortorder": 9,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Almost all day or every day",
              "sortorder": 1,
              "code": "code_1592"
            },
            {
              "name": "Once or twice daily",
              "sortorder": 2,
              "code": "code_1593"
            },
            {
              "name": "Every night or day",
              "sortorder": 3,
              "code": "code_1594"
            },
            {
              "name": "2-3 times per week",
              "sortorder": 4,
              "code": "code_1595"
            },
            {
              "name": "Once a week",
              "sortorder": 5,
              "code": "code_1596"
            },
            {
              "name": "Once a month",
              "sortorder": 6,
              "code": "code_1597"
            },
            {
              "name": "Never",
              "sortorder": 7,
              "code": "code_1598"
            }
          ]
        },
        {
          "label": "Eating too much or too little",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "eating_too",
          "sortorder": 10,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Almost all day or every day",
              "sortorder": 1,
              "code": "code_1599"
            },
            {
              "name": "Once or twice daily",
              "sortorder": 2,
              "code": "code_1600"
            },
            {
              "name": "Every night or day",
              "sortorder": 3,
              "code": "code_1601"
            },
            {
              "name": "2-3 times per week",
              "sortorder": 4,
              "code": "code_1602"
            },
            {
              "name": "Once a week",
              "sortorder": 5,
              "code": "code_1603"
            },
            {
              "name": "Once a month",
              "sortorder": 6,
              "code": "code_1604"
            },
            {
              "name": "Never",
              "sortorder": 7,
              "code": "code_1605"
            }
          ]
        },
        {
          "label": "Diarrhea, cramps, gas, constipation",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "diarrhea",
          "sortorder": 11,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Almost all day or every day",
              "sortorder": 1,
              "code": "code_1606"
            },
            {
              "name": "Once or twice daily",
              "sortorder": 2,
              "code": "code_1607"
            },
            {
              "name": "Every night or day",
              "sortorder": 3,
              "code": "code_1608"
            },
            {
              "name": "2-3 times per week",
              "sortorder": 4,
              "code": "code_1609"
            },
            {
              "name": "Once a week",
              "sortorder": 5,
              "code": "code_1610"
            },
            {
              "name": "Once a month",
              "sortorder": 6,
              "code": "code_1611"
            },
            {
              "name": "Never",
              "sortorder": 7,
              "code": "code_1612"
            }
          ]
        },
        {
          "label": "Restlessness,itching, tics",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "restlessness_itching_tics",
          "sortorder": 12,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Almost all day or every day",
              "sortorder": 1,
              "code": "code_1613"
            },
            {
              "name": "Once or twice daily",
              "sortorder": 2,
              "code": "code_1614"
            },
            {
              "name": "Every night or day",
              "sortorder": 3,
              "code": "code_1615"
            },
            {
              "name": "2-3 times per week",
              "sortorder": 4,
              "code": "code_1616"
            },
            {
              "name": "Once a week",
              "sortorder": 5,
              "code": "code_1617"
            },
            {
              "name": "Once a month",
              "sortorder": 6,
              "code": "code_1618"
            },
            {
              "name": "Never",
              "sortorder": 7,
              "code": "code_1619"
            }
          ]
        }
        ,
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 13,
          "type": "TEXT"
        }],
      "name": "SOS",
      "label": "Symptoms of Stress",
      "isRepeat": true
    },
    "AWST": {
      "fields": [
        {
          "label": "Choice of career",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "choice_of_career",
          "sortorder": 1,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1619",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1620",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1621",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1622",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1623",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1624",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1625",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Present job/ business/ school",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "present_job_business_school",
          "sortorder": 2,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1626",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1627",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1628",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1629",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1630",
              "totalscore":"-1"
            },
            {
              "name": "-2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1631",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1632",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Marital status",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "marital_status",
          "sortorder": 3,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1633",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1634",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1635",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1636",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1637",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1638",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1639",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Primary relationships",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "primary_relationships",
          "sortorder": 4,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1640",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1641",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1642",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1643",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1644",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1645",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1646",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Capacity to have fun",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "capacity_to_have_fun",
          "sortorder": 5,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1647",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1648",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1649",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1650",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1651",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1652",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1653",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Amount of fun experienced in last month",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "amount_of_fun_experienced",
          "sortorder": 6,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1654",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1655",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1656",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1657",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1658",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1659",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1660",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Financial prospects",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "financial_prospects",
          "sortorder": 7,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1661",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1662",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1663",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1664",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1665",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1666",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1667",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Current income level",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "current_income_level",
          "sortorder": 8,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1668",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1669",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1670",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1671",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1672",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1673",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1674",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Spirituality",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "spirituality",
          "sortorder": 9,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1675",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1676",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1677",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1678",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1679",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1680",
              "totalscore":"-2"
              
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1681",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Level of self-esteem",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "level_of_self_esteem",
          "sortorder": 10,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1682",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1683",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1684",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1685",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1686",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1687",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1688",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Prospects for having impact on those who know you and possibly others",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "prospects_for_having_impact",
          "sortorder": 11,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1689",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1690",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1691",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1692",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1693",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1694",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1695",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Sex life",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "sex_life",
          "sortorder": 12,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1696",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1697",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1698",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1699",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1700",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1701",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1702",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Body, how it looks and performs",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "body_how_it_looks_and_performs",
          "sortorder": 13,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1703",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1704",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1705",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1706",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1707",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1708",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1709",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Home life",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "home_life",
          "sortorder": 14,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1710",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1711",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1712",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1713",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1714",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1715",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1716",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Life skills and knowledge of issues and facts unrelated to your job or profession",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "life_skills_and_knowledge_of_issues",
          "sortorder": 15,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1717",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1718",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1719",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1720",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1721",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1722",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1723",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Learned stress management capacities",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "learned_stress_management_capacities",
          "sortorder": 16,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1724",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1725",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1726",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1727",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1728",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1729",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1730",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Nutritional knowledge, attitudes, and choices",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "nutritional_knowledge_attitudes_and_choices",
          "sortorder": 17,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1731",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1732",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1733",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1734",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1735",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1736",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1737",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Ability to recover from disappointment, hurts, setbacks, and tragedies",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "ability_to_recover_from_disappointment",
          "sortorder": 18,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1738",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1739",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1740",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1741",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1742",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1743",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1744",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Confidence that you currently are, or will in the future be, reasonably close to your highest potential.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "confidence_that_you_currently",
          "sortorder": 19,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1745",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1746",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1747",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1748",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1749",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1750",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1751",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Achievement of a rounded or balanced quality in your life",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "achievement_of_a_rounded_or_balanced",
          "sortorder": 20,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1752",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1753",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1754",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1755",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1756",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1757",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1758",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Sense that life for you is on an upward curve, getting better and fuller all the time",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "sense_that_life_for_you_is_on_an_upward",
          "sortorder": 21,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1759",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1760",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1761",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1762",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1763",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1764",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1765",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Level of participation in issues and concerns beyond your immediate interests",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "level_of_participation_in_issues",
          "sortorder": 22,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1766",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1767",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1768",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1769",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1770",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1771",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1772",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Choice whether to parent or not and with the consequences or results of that choice",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "choice_whether_to_parent",
          "sortorder": 23,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1773",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1774",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1775",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1776",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1777",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1778",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1779",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Role in some kind of network of friends, relatives, and/or others about whom you care deeply and who reciprocate that commitment to you.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "role_in_some_kind_of_network_of_friends",
          "sortorder": 24,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1780",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1781",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1782",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1783",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1784",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1785",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1786",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Emotional acceptance of the inescapable reality of aging",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "emotional_acceptance_of_the_inescapable",
          "sortorder": 25,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "totalscore":"0"
            },
            {
              "name": "+3 = Ecstatic",
              "sortorder": 1,
              "code": "code_1787",
              "totalscore":"3"
            },
            {
              "name": "+2 = Very happy",
              "sortorder": 2,
              "code": "code_1788",
              "totalscore":"2"
            },
            {
              "name": "+1 = Mildly happy",
              "sortorder": 3,
              "code": "code_1789",
              "totalscore":"1"
            },
            {
              "name": "0 = Indifferent",
              "sortorder": 4,
              "code": "code_1790",
              "totalscore":"0"
            },
            {
              "name": "-1 = Mildly disappointed",
              "sortorder": 5,
              "code": "code_1791",
              "totalscore":"-1"
            },
            {
              "name": "- 2 = Very disappointed",
              "sortorder": 6,
              "code": "code_1792",
              "totalscore":"-2"
            },
            {
              "name": "- 3 = Completely dismayed",
              "sortorder": 7,
              "code": "code_1793",
              "totalscore":"-3"
            }
          ]
        },
        {
          "label": "Total Score",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "totalscore",
          "sortorder": 26,
          totalscore:true,
          id:"totalscore",
          "type": "NUMBER"
        },
        {
          "label": "Ardell Wellness Stress Test Interpretation",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "ardell_Wellness_Stress_Test_Interpretation",
          "sortorder": 27,
          id: "ardell_Wellness_Stress_Test_Interpretation",
          // isAutoCalculate:true,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "+ 51 to + 75  - You are a self-actualized person, nearly immune from the ravages of stress. "+ 
              "There are few,if any, challenges likely to untrack you from a sense of near total well-being.",
              "sortorder": 1,
              "code": "code_1794"
            },
            {
              "name": "+ 25 to + 50  - You have mastered the wellness approach to life and have the capacity to deal creatively and efficiently with events and circumstances.",
              "sortorder": 2,
              "code": "code_1795"
            },
            {
              "name": "+ 1 to + 24  - You are a wellness-oriented person, with an ability to prosper as a whole person, but you should give a bit more attention to optimal health concepts and skill building.",
              "sortorder": 3,
              "code": "code_1796"
            },
            {
              "name": "0 to - 24 You are a candidate for additional training in how to deal with stress. A sudden increase in potentially negative events and circumstances could cause a severe emotional setback.",
              "sortorder": 4,
              "code": "code_1797"
            },
            {
              "name": "- 25 to - 50 You are a candidate for counseling. You are either too pessimistic or have severe problems in dealing with stress.",
              "sortorder": 5,
              "code": "code_1798"
            },
            {
              "name": "- 51 to - 75 You are a candidate for major psychological care with virtually no capacity for coping with life's problems.",
              "sortorder": 6,
              "code": "code_1799"
            }
          ]
        },
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 28,
          "type": "TEXT"
        }],
      "name": "AWST",
      "label": "The Ardell Wellness Stress Test",
      "isRepeat": true
    },
    "SCRI": {
      "fields": [
        {
          "label": "How frequently do you moderately exercise?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "how_frequently_do_you_moderately_exercise",
          "sortorder": 1,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "wellnesscalescore":0,
            },
            {
              "name": "Daily or more often",
              "sortorder": 1,
              "code": "code_1800",
              "wellnesscalescore":4,
            },
            {
              "name": "Once or twice a week",
              "sortorder": 2,
              "code": "code_1801",
              "wellnesscalescore":3,
            },
            {
              "name": "Once or twice a month",
              "sortorder": 3,
              "code": "code_1802",
              "wellnesscalescore":2,
            },
            {
              "name": "Seldom",
              "sortorder": 4,
              "code": "code_1803",
              "wellnesscalescore":1,
            }
          ]
        },
        {
          "label": "How often do you get a full, restful night of sleep?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "restful_night_of_sleep",
          "sortorder": 2,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "wellnesscalescore":0,
            },
            {
              "name": "Most every night",
              "sortorder": 1,
              "code": "code_1804",
              "wellnesscalescore":4,
            },
            {
              "name": "Four to five times a each week",
              "sortorder": 2,
              "code": "code_1805",
              "wellnesscalescore":3,
            },
            {
              "name": "Two to three times each week",
              "sortorder": 3,
              "code": "code_1806",
              "wellnesscalescore":2,
            },
            {
              "name": "Seldom",
              "sortorder": 4,
              "code": "code_1807",
              "wellnesscalescore":1,
            }
          ]
        },
        {
          "label": "To what extent is your energy sufficient for our work and daily activities?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "energy_sufficient_for_our_work_and_daily_activities",
          "sortorder": 3,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "wellnesscalescore":0,
            },
            {
              "name": "to a very great extent",
              "sortorder": 1,
              "code": "code_1808",
              "wellnesscalescore":4,
            },
            {
              "name": "to some extent",
              "sortorder": 2,
              "code": "code_1809",
              "wellnesscalescore":3,
            },
            {
              "name": "to little extent",
              "sortorder": 3,
              "code": "code_1810",
              "wellnesscalescore":2,
            },
            {
              "name": "to very little extent",
              "sortorder": 4,
              "code": "code_1811",
              "wellnesscalescore":1,
            }
          ]
        },
        {
          "label": "How closely does your weight approach the ideal level?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "does_your_weight_approach_the_ideal_level",
          "sortorder": 4,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "wellnesscalescore":0,
            },
            {
              "name": "My weight is at the ideal level",
              "sortorder": 1,
              "code": "code_1812",
              "wellnesscalescore":4,
            },
            {
              "name": "My weight is close to the idea level",
              "sortorder": 2,
              "code": "code_1813",
              "wellnesscalescore":3,
            },
            {
              "name": "My weight is not close to the ideal level",
              "sortorder": 3,
              "code": "code_1814",
              "wellnesscalescore":2,
            },
            {
              "name": "I am dangerously overweight (underweight)",
              "sortorder": 4,
              "code": "code_1815",
              "wellnesscalescore":1,
            }
          ]
        },
        {
          "label": "To what extent do you eat a nutritious diet?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "do_you_eat_nutritious_diet",
          "sortorder": 5,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "wellnesscalescore":0,
            },
            {
              "name": "to a very great extent",
              "sortorder": 1,
              "code": "code_1816",
              "wellnesscalescore":4,
            },
            {
              "name": "to some extent",
              "sortorder": 2,
              "code": "code_1817",
              "wellnesscalescore":3,
            },
            {
              "name": "to little extent",
              "sortorder": 3,
              "code": "code_1818",
              "wellnesscalescore":2,
            },
            {
              "name": "to very little extent",
              "sortorder": 4,
              "code": "code_1819",
              "wellnesscalescore":1,
            }
          ]
        },
        {
          "label": "Which of the following best describes your use of tobacco?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "describes_your_use_of_tobacco",
          "sortorder": 6,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "wellnesscalescore":0,
            },
            {
              "name": "In no period of my life have I had the habit of smoking or chewing tobacco.",
              "sortorder": 1,
              "code": "code_1820",
              "wellnesscalescore":4,
            },
            {
              "name": "Early in my life for a short period I smoked or chewed tobacco",
              "sortorder": 2,
              "code": "code_1821",
              "wellnesscalescore":3,
            },
            {
              "name": "I stopped smoking or chewing tobacco over the past two years",
              "sortorder": 3,
              "code": "code_1822",
              "wellnesscalescore":2,
            },
            {
              "name": "I currently smoke or chew tobacco",
              "sortorder": 4,
              "code": "code_1823",
              "wellnesscalescore":1,
            }
          ]
        },
        {
          "label": "Which of the following best describes your use of alcohol?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "describes_your_use_of_alcohol",
          "sortorder": 7,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "wellnesscalescore":0,
            },
            {
              "name": "I do not abuse alcohol and never have. (Abuse is defined as drinking more than two drinks within a short period such as an evening.)",
              "sortorder": 1,
              "code": "code_1824",
              "wellnesscalescore":4,
            },
            {
              "name": "Very occasionally I abuse alcohol.",
              "sortorder": 2,
              "code": "code_1826",
              "wellnesscalescore":3,
            },
            {
              "name": "I have a history of abusing alcohol but am not presently abusing it.",
              "sortorder": 3,
              "code": "code_1827",
              "wellnesscalescore":2,
            },
            {
              "name": "I am presently abusing alcohol.",
              "sortorder": 4,
              "code": "code_1829",
              "wellnesscalescore":1,
            }
          ]
        },
        {
          "label": "To what extent do you believe that you have a history of coping well with highly stressful situations?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "highly_stressful_situations",
          "sortorder": 8,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "thoughtcontrolscore":0,
            },
            {
              "name": "to a very great extent",
              "sortorder": 1,
              "code": "code_1830",
              "thoughtcontrolscore":4,
            },
            {
              "name": "to some extent",
              "sortorder": 2,
              "code": "code_1831",
              "thoughtcontrolscore":3,
            },
            {
              "name": "to little extent",
              "sortorder": 3,
              "code": "code_1832",
              "thoughtcontrolscore":2,
            },
            {
              "name": "to very little extent",
              "sortorder": 4,
              "code": "code_1833",
              "thoughtcontrolscore":1,
            }
          ]
        },
        {
          "label": "How confident are you of being able to control your emotions in stressful situations?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "your_emotions_in_stressful_situations",
          "sortorder": 9,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "thoughtcontrolscore":0,
            },
            {
              "name": "I never let my emotions run away me.",
              "sortorder": 1,
              "code": "code_1834",
              "thoughtcontrolscore":4,
            },
            {
              "name": "I seldom let my emotions run away with me.",
              "sortorder": 2,
              "code": "code_1835",
              "thoughtcontrolscore":3,
            },
            {
              "name": "I sometimes let my emotions run away with me.",
              "sortorder": 3,
              "code": "code_1836",
              "thoughtcontrolscore":2,
            },
            {
              "name": "I often let my emotions run away with me.",
              "sortorder": 4,
              "code": "code_1837",
              "thoughtcontrolscore":1,
            }
          ]
        },
        {
          "label": "When things are not going well, how likely are you to view the situation as being temporary rather than permanent?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "situation_as_being_temporary_rather_than_permanent",
          "sortorder": 10,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "thoughtcontrolscore":0,
            },
            {
              "name": "very likely",
              "sortorder": 1,
              "code": "code_1838",
              "thoughtcontrolscore":4,
            },
            {
              "name": "likely",
              "sortorder": 2,
              "code": "code_1839",
              "thoughtcontrolscore":3,
            },
            {
              "name": "unlikely",
              "sortorder": 3,
              "code": "code_1840",
              "thoughtcontrolscore":2,
            },
            {
              "name": "very unlikely",
              "sortorder": 4,
              "code": "code_1841",
              "thoughtcontrolscore":1,
            }
          ]
        },
        {
          "label": "When something bad happens to you, how likely are you to exaggerate its importance?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "exaggerate_its_importance",
          "sortorder": 11,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "thoughtcontrolscore":0,
            },
            {
              "name": "very unlikely",
              "sortorder": 1,
              "code": "code_1842",
              "thoughtcontrolscore":4,
            },
            {
              "name": "unlikely",
              "sortorder": 2,
              "code": "code_1843",
              "thoughtcontrolscore":3,
            },
            {
              "name": "likely",
              "sortorder": 3,
              "code": "code_1844",
              "thoughtcontrolscore":2,
            },
            {
              "name": "very likely",
              "sortorder": 4,
              "code": "code_1845",
              "thoughtcontrolscore":1,
            }
          ]
        },
        {
          "label": "When stressed by a complex situation, how likely are you to focus your attention on those aspects of the situation that you can manage?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "when_stressed_by_a_complex_situation",
          "sortorder": 12,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "thoughtcontrolscore":0,
            },
            {
              "name": "very likely",
              "sortorder": 1,
              "code": "code_1846",
              "thoughtcontrolscore":4,
            },
            {
              "name": "likely",
              "sortorder": 2,
              "code": "code_1847",
              "thoughtcontrolscore":3,
            },
            {
              "name": "unlikely",
              "sortorder": 3,
              "code": "code_1848",
              "thoughtcontrolscore":2,
            },
            {
              "name": "very unlikely",
              "sortorder": 4,
              "code": "code_1849",
              "thoughtcontrolscore":1,
            }
          ]
        },
        {
          "label": "When highly stressed, how capable are you of changing your thinking to calm down?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "changing_your_thinking_to_calm_down",
          "sortorder": 13,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "thoughtcontrolscore":0,
            },
            {
              "name": "very capable",
              "sortorder": 1,
              "code": "code_1850",
              "thoughtcontrolscore":4,
            },
            {
              "name": "capable",
              "sortorder": 2,
              "code": "code_1851",
              "thoughtcontrolscore":3,
            },
            {
              "name": "incapable",
              "sortorder": 3,
              "code": "code_1852",
              "thoughtcontrolscore":2,
            },
            {
              "name": "very incapable",
              "sortorder": 4,
              "code": "code_1853",
              "thoughtcontrolscore":1,
            }
          ]
        },
        {
          "label": "When confronted with a stressful situation, how likely are you to wait passively for events to develop rather than to take charge?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "events_to_develop_rather_than_to_take_charge",
          "sortorder": 14,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "activecopingscore":0
            },
            {
              "name": "very unlikely",
              "sortorder": 1,
              "code": "code_1854",
              "activecopingscore":4
            },
            {
              "name": "unlikely",
              "sortorder": 2,
              "code": "code_1855",
              "activecopingscore":3
            },
            {
              "name": "likely",
              "sortorder": 3,
              "code": "code_1856",
              "activecopingscore":2
            },
            {
              "name": "very likely",
              "sortorder": 4,
              "code": "code_1857",
              "activecopingscore":1
            }
          ]
        },
        {
          "label": "Which of the following courses of action are you most likely to take when you have become thoroughly frustrated?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "you_have_become_thoroughly_frustrated",
          "sortorder": 15,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "activecopingscore":0
            },
            {
              "name": "identify an alternate goal and pursue it",
              "sortorder": 1,
              "code": "code_1858",
              "activecopingscore":4
            },
            {
              "name": "pursue a relaxing activity",
              "sortorder": 2,
              "code": "code_1859",
              "activecopingscore":3
            },
            {
              "name": "withdraw and fell sorry for yourself",
              "sortorder": 3,
              "code": "code_1860",
              "activecopingscore":2
            },
            {
              "name": "vent your aggression on someone weaker than you",
              "sortorder": 4,
              "code": "code_1861",
              "activecopingscore":1
            }
          ]
        },
        {
          "label": "If you had worn an article of clothing one day and then found it to be flawed, how likely would you be to return it and ask for a refund?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "how_likely_would_you_be_to_refund",
          "sortorder": 16,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "activecopingscore":0
            },
            {
              "name": "very likely",
              "sortorder": 1,
              "code": "code_1862",
              "activecopingscore":4
            },
            {
              "name": "likely",
              "sortorder": 2,
              "code": "code_1863",
              "activecopingscore":3
            },
            {
              "name": "unlikely",
              "sortorder": 3,
              "code": "code_1864",
              "activecopingscore":2
            },
            {
              "name": "very unlikely",
              "sortorder": 4,
              "code": "code_1865",
              "activecopingscore":1
            }
          ]
        },
        {
          "label": "When an unexpected, negative event happens to you, how likely are you to actively seek information about the event and how to cope with it?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "about_the_event_and_how_to_cope_with_it",
          "sortorder": 17,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "activecopingscore":0
            },
            {
              "name": "very likely",
              "sortorder": 1,
              "code": "code_1866",
              "activecopingscore":4
            },
            {
              "name": "likely",
              "sortorder": 2,
              "code": "code_1867",
              "activecopingscore":3
            },
            {
              "name": "unlikely",
              "sortorder": 3,
              "code": "code_1868",
              "activecopingscore":2
            },
            {
              "name": "very unlikely",
              "sortorder": 4,
              "code": "code_1869",
              "activecopingscore":1
            }
          ]
        },
        {
          "label": "How much decision-making power so you have in your family?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "decision_making_power_so_you_have_in_your_family",
          "sortorder": 18,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "activecopingscore":0
            },
            {
              "name": "more power than any other member of my family",
              "sortorder": 1,
              "code": "code_1870",
              "activecopingscore":4
            },
            {
              "name": "as much power as any other member of my family",
              "sortorder": 2,
              "code": "code_1871",
              "activecopingscore":3
            },
            {
              "name": "less power than most members of my family",
              "sortorder": 3,
              "code": "code_1872",
              "activecopingscore":2
            },
            {
              "name": "less power than any other member of my family",
              "sortorder": 4,
              "code": "code_1873",
              "activecopingscore":1
            }
          ]
        },
        {
          "label": "How much decision-making power do you have in your working environment? (if not working outside the home at present, use your last job as a basis for answering this question.)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "do_you_have_in_your_working_environment",
          "sortorder": 19,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "activecopingscore":0
            },
            {
              "name": "more power than most members of my work team",
              "sortorder": 1,
              "code": "code_1874",
              "activecopingscore":4
            },
            {
              "name": "as much power as any other member of my work team",
              "sortorder": 2,
              "code": "code_1875",
              "activecopingscore":3
            },
            {
              "name": "less power than most members of my work team",
              "sortorder": 3,
              "code": "code_1876",
              "activecopingscore":2
            },
            {
              "name": "less power than any other member of my work team",
              "sortorder": 4,
              "code": "code_1877",
              "activecopingscore":1
            }
          ]
        },
        {
          "label": "To what extent do you believe that events in your life are merely the result of luck, fate, or chance?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "life_are_merely_the_result_of_luck_fate_or_chance",
          "sortorder": 20,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "activecopingscore":0
            },
            {
              "name": "to very little extent",
              "sortorder": 1,
              "code": "code_1878",
              "activecopingscore":4
            },
            {
              "name": "to little extent",
              "sortorder": 2,
              "code": "code_1879",
              "activecopingscore":3
            },
            {
              "name": "to some extent",
              "sortorder": 3,
              "code": "code_1880",
              "activecopingscore":2
            },
            {
              "name": "to a great extent",
              "sortorder": 4,
              "code": "code_1881",
              "activecopingscore":1
            }
          ]
        },
        {
          "label": "What is your best guess as to the extent and quality of contact you had with your parent(s) shortly after birth?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "your_parent_shortly_after_birth",
          "sortorder": 21,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "socialeasescore":0
            },
            {
              "name": "was given an above average amount of contact by happy parent(s)",
              "sortorder": 1,
              "code": "code_1882",
              "socialeasescore":4
            },
            {
              "name": "was given an average amount of contact by happy parent(s)",
              "sortorder": 2,
              "code": "code_1883",
              "socialeasescore":3
            },
            {
              "name": "was given an average amount of contact by unhappy (perhaps angry) parent(s)",
              "sortorder": 3,
              "code": "code_1884",
              "socialeasescore":2
            },
            {
              "name": "was given a below average amount of contact by unhappy (perhaps angry) parent(s)",
              "sortorder": 4,
              "code": "code_1885",
              "socialeasescore":1
            }
          ]
        },
        {
          "label": "During your early childhood, to what extent was your mother both calm and generally permissive?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "calm_and_generally_permissive",
          "sortorder": 22,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "socialeasescore":0
            },
            {
              "name": "to a very great extent",
              "sortorder": 1,
              "code": "code_1886",
              "socialeasescore":4
            },
            {
              "name": "to some extent",
              "sortorder": 2,
              "code": "code_1887",
              "socialeasescore":3
            },
            {
              "name": "to little extent",
              "sortorder": 3,
              "code": "code_1888",
              "socialeasescore":2
            },
            {
              "name": "to very little extent",
              "sortorder": 4,
              "code": "code_1889",
              "socialeasescore":1
            }
          ]
        },
        {
          "label": "How easily do you make friends in a strange situation?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "make_friends_in_strange_situation",
          "sortorder": 23,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "socialeasescore":0
            },
            {
              "name": "very easily",
              "sortorder": 1,
              "code": "code_1890",
              "socialeasescore":4
            },
            {
              "name": "easily",
              "sortorder": 2,
              "code": "code_1891",
              "socialeasescore":3
            },
            {
              "name": "uneasily",
              "sortorder": 3,
              "code": "code_1892",
              "socialeasescore":2
            },
            {
              "name": "very uneasily",
              "sortorder": 4,
              "code": "code_1893",
              "socialeasescore":1
            }
          ]
        },
        {
          "label": "When highly stressed, how likely are you to ask friends or relatives for help?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "ask_friends_or_relatives_for_help",
          "sortorder": 24,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "socialeasescore":0
            },
            {
              "name": "very likely",
              "sortorder": 1,
              "code": "code_1894",
              "socialeasescore":4
            },
            {
              "name": "likely",
              "sortorder": 2,
              "code": "code_1895",
              "socialeasescore":3
            },
            {
              "name": "unlikely",
              "sortorder": 3,
              "code": "code_1896",
              "socialeasescore":2
            },
            {
              "name": "very unlikely",
              "sortorder": 4,
              "code": "code_1897",
              "socialeasescore":1
            }
          ]
        },
        {
          "label": "In comparison with other people, how likely are you to see others as threatening, uncooperative, or exploitative?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "threatening_uncooperative_exploitative",
          "sortorder": 25,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "socialeasescore":0
            },
            {
              "name": "highly unlikely",
              "sortorder": 1,
              "code": "code_1898",
              "socialeasescore":4
            },
            {
              "name": "unlikely",
              "sortorder": 2,
              "code": "code_1899",
              "socialeasescore":3
            },
            {
              "name": "likely",
              "sortorder": 3,
              "code": "code_1900",
              "socialeasescore":2
            },
            {
              "name": "highly likely",
              "sortorder": 4,
              "code": "code_1901",
              "socialeasescore":1
            }
          ]
        },
        {
          "label": "How often are you confused about the intentions of others toward you?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "intentions_of_others_toward_you",
          "sortorder": 26,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "socialeasescore":0
            },
            {
              "name": "very infrequently",
              "sortorder": 1,
              "code": "code_1902",
              "socialeasescore":4
            },
            {
              "name": "infrequently",
              "sortorder": 2,
              "code": "code_1903",
              "socialeasescore":3
            },
            {
              "name": "frequently",
              "sortorder": 3,
              "code": "code_1904",
              "socialeasescore":2
            },
            {
              "name": "very frequently",
              "sortorder": 4,
              "code": "code_1905",
              "socialeasescore":1
            }
          ]
        },
        {
          "label": "To what extent are you aware of practical, healthy ways of relaxing?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "practical_healthy_ways_of_relaxing",
          "sortorder": 27,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "tensionreductionscore":0
            },
            {
              "name": "to a very great extent",
              "sortorder": 1,
              "code": "code_1906",
              "tensionreductionscore":4
            },
            {
              "name": "to some extent",
              "sortorder": 2,
              "code": "code_1907",
              "tensionreductionscore":3
            },
            {
              "name": "to little extent",
              "sortorder": 3,
              "code": "code_1908",
              "tensionreductionscore":2
            },
            {
              "name": "to very little extent",
              "sortorder": 4,
              "code": "code_1909",
              "tensionreductionscore":1
            }
          ]
        },
        {
          "label": "How frequently do you pursue some highly relaxing practice?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "some_highly_relaxing_practice",
          "sortorder": 28,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "tensionreductionscore":0
            },
            {
              "name": "Daily or more often",
              "sortorder": 1,
              "code": "code_1910",
              "tensionreductionscore":4
            },
            {
              "name": "Once or twice a week",
              "sortorder": 2,
              "code": "code_1911",
              "tensionreductionscore":3
            },
            {
              "name": "Once or twice a month",
              "sortorder": 3,
              "code": "code_1912",
              "tensionreductionscore":2
            },
            {
              "name": "Seldom",
              "sortorder": 4,
              "code": "code_1913",
              "tensionreductionscore":1
            }
          ]
        },
        {
          "label": "How often do you engage in a spiritual practice such as prayer, mediation, or inspirational reading to enrich your interior life?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "inspirational_reading_to_enrich_your_interior_life",
          "sortorder": 29,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "spiritualpracticescore":0
            },
            {
              "name": "Daily or more often",
              "sortorder": 1,
              "code": "code_1914",
              "spiritualpracticescore":4
            },
            {
              "name": "Once or twice a week",
              "sortorder": 2,
              "code": "code_1915",
              "spiritualpracticescore":3
            },
            {
              "name": "Once or twice a month",
              "sortorder": 3,
              "code": "code_1916",
              "spiritualpracticescore":2
            },
            {
              "name": "Seldom",
              "sortorder": 4,
              "code": "code_1917",
              "spiritualpracticescore":1
            }
          ]
        },
        {
          "label": "How connected do you feel to your conception of a higher power or to a worthy cause?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "higher_power_or_to_worthy_cause",
          "sortorder": 30,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "spiritualpracticescore":0
            },
            {
              "name": "to a very great extent",
              "sortorder": 1,
              "code": "code_1918",
              "spiritualpracticescore":4
            },
            {
              "name": "to some extent",
              "sortorder": 2,
              "code": "code_1919",
              "spiritualpracticescore":3
            },
            {
              "name": "to little extent",
              "sortorder": 3,
              "code": "code_1920",
              "spiritualpracticescore":2
            },
            {
              "name": "to very little extent",
              "sortorder": 4,
              "code": "code_1921",
              "spiritualpracticescore":1
            }
          ]
        },
        {
          "label": "To what extent do you believe your life has purpose?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "believe_your_life_has_purpose",
          "sortorder": 31,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "spiritualpracticescore":0
            },
            {
              "name": "to a very great extent",
              "sortorder": 1,
              "code": "code_1922",
              "spiritualpracticescore":4
            },
            {
              "name": "to some extent",
              "sortorder": 2,
              "code": "code_1923",
              "spiritualpracticescore":3
            },
            {
              "name": "to little extent",
              "sortorder": 3,
              "code": "code_1924",
              "spiritualpracticescore":2
            },
            {
              "name": "to very little extent",
              "sortorder": 4,
              "code": "code_1925",
              "spiritualpracticescore":1
            }
          ]
        },
        {
          "label": "How much contact do you have with what you would consider a spiritual community?",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "would_consider_spiritual_community",
          "sortorder": 32,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " ",
              "spiritualpracticescore":0
            },
            {
              "name": "very much",
              "sortorder": 1,
              "code": "code_1926",
              "spiritualpracticescore":4
            },
            {
              "name": "much",
              "sortorder": 2,
              "code": "code_1927",
              "spiritualpracticescore":3
            },
            {
              "name": "very little",
              "sortorder": 3,
              "code": "code_1928",
              "spiritualpracticescore":2
            },
            {
              "name": "none",
              "sortorder": 4,
              "code": "code_1929",
              "spiritualpracticescore":1
            }
          ]
        },
        {
          "label": "Wellness Scale (sum of scores for questions 1-7 divided by 7)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "wellnessScale",
          "sortorder": 33,
          totalscore:true,
          id:"wellnessScale",
          "type": "NUMBER"
        },
        {
          "label": "Thought Control Scale (sum of scores for questions 8-13, divided by 6)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "thoughtControlScale",
          "sortorder": 34,
          totalscore:true,
          id:"thoughtControlScale",
          "type": "NUMBER"
        },
        {
          "label": "Active Coping Scale (sum of scores for questions 14-20, divided by7)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "activeCopingScale",
          "sortorder": 35,
          id:"activeCopingScale",
          totalscore:true,
          "type": "NUMBER"
        },
        {
          "label": "Social Ease Scale (sum of scores for questions 21-26, divided by 6)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "socialEaseScale",
          id:"socialEaseScale",
          "sortorder": 36,
          totalscore:true,
          "type": "NUMBER"
        },
        {
          "label": "Tension reduction Scale (sum of scores for questions 27-28, divided by 2)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "tensionReductionScale",
          id:"tensionReductionScale",
          "sortorder": 37,
          totalscore:true,
          "type": "NUMBER"
        },
        {
          "label": "Spiritual Practice Scale (sum of scores for questions 29-32 divided by 4)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "spiritualPracticeScale",
          id:"spiritualPracticeScale",
          totalscore:true,
          "sortorder": 38,
          "type": "NUMBER"
        },
        {
          "label": "Overall Score (sum of the scale scores above, divided by 6)",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "overallScore",
          id:"overallScore",
          totalscore:true,
          "sortorder": 39,
          "type": "NUMBER"
        },
        {
          "label": "Interpreting Your Score.",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "interpreting_Your_Score",
          id:"interpreting_Your_Score",
          "sortorder": 40,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "superior stresscoper.",
              "sortorder": 1,
              "code": "code_1930"
            },
            {
              "name": "above average stresscoper.",
              "sortorder": 2,
              "code": "code_1931"
            },
            {
              "name": "average stresscoper.",
              "sortorder": 3,
              "code": "code_1932"
            },
            {
              "name": "below average stresscoper.",
              "sortorder": 4,
              "code": "code_1933"
            }
          ]
        },
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 40,
          "type": "TEXT"
        }
      ],
      "name": "SCRI",
      "label": "Stress Coping Resources Inventory:  A Self-Assessment",
      "isRepeat": true
    },
    "MSE": {
      "fields": [
        {
          "label": "Date",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_date",
          "sortorder": 1,
          "type": "DATE"
        },
        {
          "label": "General Appearance",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_generalAppearance",
          "sortorder": 2,
          "type": "TEXT"
        },
        {
          "label": "Behavior",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_behavior",
          "sortorder": 3,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Gait (Walking Style)",
              "sortorder": 1,
              "code": "code_1934"
            },
            {
              "name": "Posture",
              "sortorder": 2,
              "code": "code_1935"
            },
            {
              "name": "Mannerism",
              "sortorder": 3,
              "code": "code_1936"
            },
            {
              "name": "Tics",
              "sortorder": 4,
              "code": "code_1937"
            }
          ]
        },
        {
          "label": "Mood",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_mood",
          "sortorder": 4,
          "type": "TEXT"
        },
        {
          "label": "Affect",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_affect",
          "sortorder": 5,
          "type": "TEXT"
        },
        {
          "label": "Speech",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_speech",
          "sortorder": 6,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Rate",
              "sortorder": 1,
              "code": "code_1938"
            },
            {
              "name": "Volume",
              "sortorder": 2,
              "code": "code_1939"
            },
            {
              "name": "Tone",
              "sortorder": 3,
              "code": "code_1940"
            },
            {
              "name": "Rhythm/Fluency",
              "sortorder": 4,
              "code": "code_1941"
            },
            {
              "name": "Quantity",
              "sortorder": 5,
              "code": "code_1942"
            }
          ]
        },
        {
          "label": "Orientation",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_orientation",
          "sortorder": 7,
          "type": "TEXT"
        },
        {
          "label": "Concentration",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_concentration",
          "sortorder": 8,
          "type": "TEXT"
        },
        {
          "label": "Memory",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_memory",
          "sortorder": 9,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Immediate",
              "sortorder": 1,
              "code": "code_1943"
            },
            {
              "name": "Recent",
              "sortorder": 2,
              "code": "code_1944"
            },
            {
              "name": "Remote",
              "sortorder": 3,
              "code": "code_1945"
            }
          ]
        },
        {
          "label": "Thought Content",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_thoughtContent",
          "sortorder": 10,
          "type": "TEXT"
        },
        {
          "label": "Thought Process",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_thoughtProcesses",
          "sortorder": 11,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Coherence",
              "sortorder": 1,
              "code": "code_1946"
            },
            {
              "name": "Flight of ideas",
              "sortorder": 2,
              "code": "code_1947"
            },
            {
              "name": "Circumstantiality",
              "sortorder": 3,
              "code": "code_1948"
            },
            {
              "name": "Tangentiality",
              "sortorder": 4,
              "code": "code_1949"
            },
            {
              "name": "Word Salad",
              "sortorder": 5,
              "code": "code_1950"
            },
            {
              "name": "Thought Blocking",
              "sortorder": 6,
              "code": "code_1951"
            }
          ]
        },
        {
          "label": "Abstract Reasoning",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_abstractReasoning",
          "sortorder": 12,
          "type": "TEXT"
        },
        {
          "label": "Perception Disorders",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_perceptionDisorders",
          "sortorder": 13,
          "type": "SELECT",
          "options": [
            {
              "name": "--select your--",
              "sortorder": 0,
              "code": " "
            },
            {
              "name": "Hallucinations",
              "sortorder": 1,
              "code": "code_1952"
            },
            {
              "name": "illusions",
              "sortorder": 2,
              "code": "code_1953"
            },
            {
              "name": " Depersonalization",
              "sortorder": 3,
              "code": "code_1954"
            },
            {
              "name": " Derealization",
              "sortorder": 4,
              "code": "code_1955"
            },
            {
              "name": " Deassociation",
              "sortorder": 5,
              "code": "code_1956"
            }
          ]
        },
        {
          "label": "Judgement",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_judgement",
          "sortorder": 14,
          "type": "TEXT"
        },
        {
          "label": "Insight",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "MSE_insight",
          "sortorder": 15,
          "type": "TEXT"
        },
        {
          "label": "Summary",
          "isMandatory": false,
          "show": false,
          "programId": 0,
          "name": "Summary",
          id:"Summary",
          totalscore:true,
          "sortorder": 16,
          "type": "TEXT"
        }
      ],
      "name": "MSE",
      "label": "MENTAL STATUS EXAMINATION (MSE)",
      "isRepeat": true
    } ,
    "Admission": {
      "fields": [
        {
          "label": "Primary Sympotms",
          "isMandatory": true,
          "show": true,
          "programId": 0,
          "name": "primarySympotms",
          "sortorder": 1,
          "type": "TEXT"
        },
        {
          "label": "No of hospital days requested",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "noOfHospitalDaysRequested",
          "sortorder": 2,
          "type": "NUMBER"
        },
        {
          "label": "Insurance Provider",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "insuranceProvider",
          "sortorder": 3,
          "type": "TEXT"
        },
        {
          "label": "Insurance Number",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "insuranceNumber",
          "sortorder": 4,
          "type": "TEXT"
        },
        {
          "label": "Insurance Expiry Date",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "insuranceExpiryDate",
          "sortorder": 5,
          "type": "DATE"
        }
      ]
    },
    "Discharge": {
      "fields": [
         {
          "label": "Date Of Discharge",
          "isMandatory": true,
          "show": true,
          "programId": 0,
          "name": "dateOfDischarge",
          "sortorder": 1,
          "type": "DATE"
        },
        {
          "label": "Admitting Officer",
          "isMandatory": true,
          "show": true,
          "programId": 0,
          "name": "admittingOfficer",
          "sortorder": 2,
          "type": "TEXT"
        },
        {
          "label": "Primary Counsellor Remarks",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "primaryCounsellorRemarks",
          "sortorder": 3,
          "type": "LONG_TEXT"
        },
        {
          "label": "Management Remarks",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "managementRemarks",
          "sortorder": 4,
          "type": "LONG_TEXT"
        },
        {
          "label": "Discharge Summary",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "dischargeSummary",
          "sortorder": 5,
          "type": "LONG_TEXT"
        },
        {
          "label": "Date of review",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "dateOfReview",
          "sortorder": 6,
          "type": "DATE"
        },
        {
          "label": "Name of discharging officer",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "nameOfDischargingOfficer",
          "sortorder":7,
          "type": "TEXT"
        },
        {
          "label": "Carder",
          "isMandatory": false,
          "show": true,
          "programId": 0,
          "name": "carder",
          "sortorder": 8,
          "type": "TEXT"
        }
      ]
    }
    
  },
  roleaccess: {
    ROLE_Psychiatrist: ["CIF",
    "HealthQuestionnaire9",
    "MoodDisorderQuestionnaire",
    "PTSDCheckList",
    "CIWA",
    "COWS",
    "GAD7",
    "PAWSS",
    "SRAC",
    "SIR",
    "MSE",
    "CBI",
    "PROQOL",
    "PSS",
    "DSM5",
    "WHODAS",
    "MBI",
    "SOS",
    "AWST",
    "SCRI"
  ],
    ROLE_Psychologist: ["CIF",
    "HealthQuestionnaire9",
    "MoodDisorderQuestionnaire",
    "PTSDCheckList",
    "CIWA",
    "COWS",
    "GAD7",
    "PAWSS",
    "SRAC",
    "SIR",
    "MSE",
    "CBI",
    "PROQOL",
    "PSS",
    "DSM5",
    "WHODAS",
    "MBI",
    "SOS",
    "AWST",
    "SCRI"
  ],
    ROLE_Therapist: ["CIF",
    "HealthQuestionnaire9",
    "MoodDisorderQuestionnaire",
    "PTSDCheckList",
    "CIWA",
    "COWS",
    "GAD7",
    "PAWSS",
    "SRAC",
    "SIR",
    "MSE",
    "CBI",
    "PROQOL",
    "PSS",
    "DSM5",
    "WHODAS",
    "MBI",
    "SOS",
    "AWST",
    "SCRI"
  ],
    ROLE_Clinical: [
      "CIF",
      "HealthQuestionnaire9",
      "MoodDisorderQuestionnaire",
      "PTSDCheckList",
      "CIWA",
      "COWS",
      "GAD7",
      "PAWSS",
      "SRAC",
      "SIR",
      "MSE",
      "CBI",
      "PROQOL",
      "PSS",
      "DSM5",
      "WHODAS",
      "MBI",
      "SOS"
    ],
    ROLE_Administrator: [
      "CIF",
      "SUH",
      "Admission",
      "Discharge"
    ],
  },
}
