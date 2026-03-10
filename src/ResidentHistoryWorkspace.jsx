import { useState, useEffect, useRef } from 'react';
import {
  Pencil,
  Check,
  X,
  Search,
  ChevronDown,
  Users,
} from 'lucide-react';

/** General tab icon (user-regular style) */
function UserRegularIcon({ size = 20, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z" />
    </svg>
  );
}

const TABS = [
  'General',
  'History of Present Illness',
  'Family History',
  'Relatives',
  'Lifestyle',
  'Other',
];

/** History of Present Illness tab icon (calendar-circle-user) */
function CalendarCircleUserIcon({ size = 20, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M192 80C192 71.2 184.8 64 176 64C167.2 64 160 71.2 160 80L160 128L128 128C92.7 128 64 156.7 64 192L64 480C64 515.3 92.7 544 128 544L289.4 544C284.7 533.8 280.9 523.1 278 512L128 512C110.3 512 96 497.7 96 480L96 256L512 256L512 192C512 156.7 483.3 128 448 128L416 128L416 80C416 71.2 408.8 64 400 64C391.2 64 384 71.2 384 80L384 128L192 128L192 80zM128 160L448 160C465.7 160 480 174.3 480 192L480 224L96 224L96 192C96 174.3 110.3 160 128 160zM524 558.6C506.7 569.6 486.1 576 464 576C441.9 576 421.3 569.6 404 558.6C411.8 549.5 423.4 544 435.8 544L492.2 544C504.6 544 516.1 549.5 524 558.6zM548.3 537.8C534.5 521.7 514.1 512 492.2 512L435.8 512C414 512 393.6 521.6 379.7 537.8C362.4 518.1 352 492.3 352 464C352 402.1 402.1 352 464 352C525.9 352 576 402.1 576 464C576 492.2 565.5 518.1 548.3 537.8zM608 464C608 384.5 543.5 320 464 320C384.5 320 320 384.5 320 464C320 543.5 384.5 608 464 608C543.5 608 608 543.5 608 464zM464 416C477.3 416 488 426.7 488 440C488 453.3 477.3 464 464 464C450.7 464 440 453.3 440 440C440 426.7 450.7 416 464 416zM464 496C494.9 496 520 470.9 520 440C520 409.1 494.9 384 464 384C433.1 384 408 409.1 408 440C408 470.9 433.1 496 464 496z" />
    </svg>
  );
}

/** Family History tab icon (family-light) */
function FamilyLightIcon({ size = 20, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M192.1 160C209.8 160 224.1 145.7 224.1 128C224.1 110.3 209.8 96 192.1 96C174.4 96 160.1 110.3 160.1 128C160.1 145.7 174.4 160 192.1 160zM192.1 64C227.4 64 256.1 92.7 256.1 128C256.1 163.3 227.4 192 192.1 192C156.8 192 128.1 163.3 128.1 128C128.1 92.7 156.8 64 192.1 64zM160.1 256C142.4 256 128.1 270.3 128.1 288L128.1 352C128.1 369.7 142.4 384 160.1 384L193.1 384C192.4 389.2 192.1 394.6 192.1 400L192.1 416L160.1 416L160.1 560C160.1 568.8 152.9 576 144.1 576C135.3 576 128.1 568.8 128.1 560L128.1 407.4C109 396.3 96.1 375.7 96.1 352L96.1 288C96.1 252.7 124.8 224 160.1 224L218.9 224C217.1 231.7 216.1 239.7 216.1 248C216.1 250.7 216.2 253.4 216.4 256L160.1 256zM480.1 448L446.8 448C447.7 442.8 448.1 437.5 448.1 432L448.1 416L533.7 416L498.9 294.3C492.4 271.6 471.7 256 448.1 256C439.2 256 430.6 258.2 423.1 262.3C423.7 257.6 424.1 252.9 424.1 248C424.1 241.2 423.4 234.5 422.2 228C430.4 225.4 439.1 224 448.1 224C486 224 519.3 249.1 529.7 285.5L564.5 407.2C570.3 427.6 555 448 533.7 448L512.1 448L512.1 560C512.1 568.8 504.9 576 496.1 576C487.3 576 480.1 568.8 480.1 560L480.1 448zM448.1 160C465.8 160 480.1 145.7 480.1 128C480.1 110.3 465.8 96 448.1 96C430.4 96 416.1 110.3 416.1 128C416.1 145.7 430.4 160 448.1 160zM448.1 64C483.4 64 512.1 92.7 512.1 128C512.1 163.3 483.4 192 448.1 192C412.8 192 384.1 163.3 384.1 128C384.1 92.7 412.8 64 448.1 64zM320.1 272C333.4 272 344.1 261.3 344.1 248C344.1 234.7 333.4 224 320.1 224C306.8 224 296.1 234.7 296.1 248C296.1 261.3 306.8 272 320.1 272zM320.1 192C351 192 376.1 217.1 376.1 248C376.1 278.9 351 304 320.1 304C289.2 304 264.1 278.9 264.1 248C264.1 217.1 289.2 192 320.1 192zM320.1 352C293.6 352 272.1 373.5 272.1 400L272.1 432C272.1 440.8 279.3 448 288.1 448L352.1 448C360.9 448 368.1 440.8 368.1 432L368.1 400C368.1 373.5 346.6 352 320.1 352zM272.1 477.3C253.5 470.7 240.1 452.9 240.1 432L240.1 400C240.1 355.8 275.9 320 320.1 320C364.3 320 400.1 355.8 400.1 400L400.1 432C400.1 452.9 386.7 470.7 368.1 477.3L368.1 560C368.1 568.8 360.9 576 352.1 576C343.3 576 336.1 568.8 336.1 560L336.1 480L304.1 480L304.1 560C304.1 568.8 296.9 576 288.1 576C279.3 576 272.1 568.8 272.1 560L272.1 477.3z" />
    </svg>
  );
}

/** Relatives tab icon (people-group-sharp-light) */
function PeopleGroupSharpLightIcon({ size = 20, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M288 128C288 110.3 302.3 96 320 96C337.7 96 352 110.3 352 128C352 145.7 337.7 160 320 160C302.3 160 288 145.7 288 128zM384 128C384 92.7 355.3 64 320 64C284.7 64 256 92.7 256 128C256 163.3 284.7 192 320 192C355.3 192 384 163.3 384 128zM160 128C173.3 128 184 138.7 184 152C184 165.3 173.3 176 160 176C146.7 176 136 165.3 136 152C136 138.7 146.7 128 160 128zM160 208C190.9 208 216 182.9 216 152C216 121.1 190.9 96 160 96C129.1 96 104 121.1 104 152C104 182.9 129.1 208 160 208zM480 128C493.3 128 504 138.7 504 152C504 165.3 493.3 176 480 176C466.7 176 456 165.3 456 152C456 138.7 466.7 128 480 128zM480 208C510.9 208 536 182.9 536 152C536 121.1 510.9 96 480 96C449.1 96 424 121.1 424 152C424 182.9 449.1 208 480 208zM160 256C107 256 64 299 64 352L64 448L96 448L96 544L128 544L128 416L96 416L96 352C96 316.7 124.7 288 160 288C164.4 288 168.6 288.4 172.8 289.3C177.2 279.1 182.5 269.4 188.8 260.4C179.7 257.5 170 256 160 256zM467 288.7C469.9 288.3 473 288 476 288L480 288C515.3 288 544 316.7 544 352L544 416L512 416L512 544L544 544L544 448L576 448L576 352C576 299 533 256 480 256L476 256C467.2 256 458.7 257.2 450.6 259.6C457 268.7 462.5 278.4 467 288.7zM208 464L240 464L240 576L400 576L400 464L432 464L432 352C432 290.1 381.9 240 320 240C258.1 240 208 290.1 208 352L208 464zM400 432L368 432L368 544L272 544L272 432L240 432L240 352C240 307.8 275.8 272 320 272C364.2 272 400 307.8 400 352L400 432z" />
    </svg>
  );
}

/** Lifestyle tab icon (mug-hot-regular) */
function MugHotRegularIcon({ size = 20, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M184 48C197.3 48 208 58.7 208 72C208 88.1 215.5 95.7 231.8 109.9L232.9 110.9C248.6 124.6 272 145.1 272 184C272 197.3 261.3 208 248 208C234.7 208 224 197.3 224 184C224 167.9 216.5 160.3 200.2 146.1L199.1 145.1C183.4 131.4 160 110.9 160 72C160 58.7 170.7 48 184 48zM144 480C144 506.5 165.5 528 192 528L384 528C410.5 528 432 506.5 432 480L432 304L144 304L144 480zM480 304L480 448L488 448C527.8 448 560 415.8 560 376C560 336.2 527.8 304 488 304L480 304zM478.7 496C471.1 541.4 431.6 576 384 576L192 576C139 576 96 533 96 480L96 288C96 270.3 110.3 256 128 256L488 256C554.3 256 608 309.7 608 376C608 442.3 554.3 496 488 496L478.7 496zM320 72C320 88.1 327.5 95.7 343.8 109.9L344.9 110.9C360.6 124.6 384 145.1 384 184C384 197.3 373.3 208 360 208C346.7 208 336 197.3 336 184C336 167.9 328.5 160.3 312.2 146.1L311.1 145.1C295.4 131.4 272 110.9 272 72C272 58.7 282.7 48 296 48C309.3 48 320 58.7 320 72z" />
    </svg>
  );
}

/** Other tab icon (ellipsis-stroke-light) */
function EllipsisStrokeLightIcon({ size = 20, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M112 320C112 337.7 126.3 352 144 352C161.7 352 176 337.7 176 320C176 302.3 161.7 288 144 288C126.3 288 112 302.3 112 320zM208 320C208 355.3 179.3 384 144 384C108.7 384 80 355.3 80 320C80 284.7 108.7 256 144 256C179.3 256 208 284.7 208 320zM320 288C302.3 288 288 302.3 288 320C288 337.7 302.3 352 320 352C337.7 352 352 337.7 352 320C352 302.3 337.7 288 320 288zM320 384C284.7 384 256 355.3 256 320C256 284.7 284.7 256 320 256C355.3 256 384 284.7 384 320C384 355.3 355.3 384 320 384zM496 288C478.3 288 464 302.3 464 320C464 337.7 478.3 352 496 352C513.7 352 528 337.7 528 320C528 302.3 513.7 288 496 288zM496 384C460.7 384 432 355.3 432 320C432 284.7 460.7 256 496 256C531.3 256 560 284.7 560 320C560 355.3 531.3 384 496 384z" />
    </svg>
  );
}

const TAB_ICONS = [UserRegularIcon, CalendarCircleUserIcon, FamilyLightIcon, PeopleGroupSharpLightIcon, MugHotRegularIcon, EllipsisStrokeLightIcon];

const INITIAL_MOCK_DATA = {
  general: {
    riskFactors: ['Hypertension', 'Diabetes'],
    examsAndTests: [
      { examName: 'Breast Exam', status: 'Normal', notes: '' },
      { examName: 'Cardiac Echo', status: 'N/A', notes: '' },
      { examName: 'ECG', status: 'Abnormal', notes: 'Irregular heartbeat detected' },
      { examName: 'Gynecological Exam', status: 'N/A', notes: '' },
      { examName: 'Mammogram', status: 'N/A', notes: '' },
      { examName: 'Physical Exam', status: 'Normal', notes: '01/15/2024' },
      { examName: 'Prostate Exam', status: 'N/A', notes: '' },
      { examName: 'Rectal Exam', status: 'N/A', notes: '' },
      { examName: 'Sigmoid/Colonoscopy', status: 'N/A', notes: '' },
      { examName: 'Retinal Exam', status: 'N/A', notes: '' },
      { examName: 'Flu Vaccination', status: 'N/A', notes: '' },
      { examName: 'Pneumonia Vaccination', status: 'N/A', notes: '' },
      { examName: 'LDL', status: 'N/A', notes: '' },
      { examName: 'Hemoglobin', status: 'N/A', notes: '' },
      { examName: 'PSA', status: 'N/A', notes: '' },
    ],
    examsSummary: 'Annual physical completed 01/15/2024. CBC and Metabolic Panel within normal limits. Patient reports no new symptoms.',
    contraceptiveComplication: '',
    otherSpecify: 'Requires wheelchair assistance for long distances.',
  },
  hpi: {
    location: 'Lower lumbar region, radiating to left hip.',
    quality: 'Dull, aching constant pain. Occasional sharp twinges.',
    severity: 'Moderate (Pain scale 5/10).',
    severityValue: 'Moderate',
    duration: 'Symptoms present for approximately 3 weeks.',
    timing: 'Intermittent; worse in the mornings...',
    context: 'Onset occurred 2 days after heavy lifting activity.',
    associatedSigns: 'Stiffness, limited range of motion.',
    modifyingFactors: 'Improved with rest and heat application.',
  },
  familyHistory: {
    siblings: '2 Sisters',
    siblingsDiagnoses: [{ id: 'E11.9', label: 'E11.9 - Type 2 Diabetes' }],
    spouse: 'John Smith',
    spouseDiagnoses: [],
    offspring: '',
    offspringDiagnoses: [],
  },
  relatives: {
    cancer: 'Maternal Aunt (Breast Cancer).',
    tuberculosis: 'None reported.',
    diabetes: 'Father (Type 2).',
    highBloodPressure: 'Mother, Maternal Grandmother.',
    heartProblems: 'Paternal Grandfather.',
    stroke: 'Paternal Uncle.',
    epilepsy: 'None reported.',
    mentalIllness: 'Sister (Bipolar Disorder).',
    suicide: 'None reported.',
  },
  lifestyle: {
    tobaccoAmount: '1 pack/day',
    tobaccoStatus: 'Former Smoker',
    tobaccoStart: '',
    tobaccoEnd: '',
    alcoholDetails: '',
    alcoholStatus: 'Current',
    alcoholStart: '',
    alcoholEnd: '',
    recreationalDetails: '',
    recreationalStatus: 'None',
    recreationalStart: '',
    recreationalEnd: '',
    coffeeDetails: '',
    coffeeStatus: 'Current',
    coffeeStart: '',
    coffeeEnd: '',
    counselingDetails: '',
    counselingStatus: 'Ongoing',
    counselingStartDate: '',
    counselingEndDate: '',
    exerciseDetails: 'Gym 3x/week',
    exerciseStatus: 'Active',
    exerciseStartDate: '',
    exerciseEndDate: '',
    hazardousDetails: '',
    hazardousStatus: 'No',
    hazardousDate: '',
    hazardousEndDate: '',
    sleepPatterns: '',
    seatbeltUse: '',
  },
  other: {
    name1: '',
    value1: '',
    name2: '',
    value2: '',
    additionalHistory: '',
  },
};

export default function ResidentHistoryWorkspace({ embedded = false }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);
  const [mockData, setMockData] = useState(INITIAL_MOCK_DATA);

  const handleSaveChanges = () => {
    setMockData((prev) => {
      const general = prev.general || {};
      const examsForSummary =
        general.examsAndTests || EXAMS_AND_TESTS_DEFINITION;
      const summaryParts = examsForSummary
        .filter(
          (exam) =>
            exam &&
            ((exam.status && exam.status !== 'N/A') ||
              (exam.notes && exam.notes.trim() !== ''))
        )
        .map((exam) => {
          const pieces = [];
          if (exam.status && exam.status !== 'N/A') {
            pieces.push(exam.status);
          }
          if (exam.notes && exam.notes.trim() !== '') {
            pieces.push(exam.notes.trim());
          }
          const result = pieces.join(' - ');
          return `${exam.examName}: ${result}`;
        });
      const examsSummary =
        summaryParts.length > 0
          ? summaryParts.join('. ')
          : general.examsSummary || '';
      return {
        ...prev,
        general: {
          ...general,
          examsSummary,
        },
      };
    });
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setIsEditMode(false);
  };

  const handleFieldChange = (section, field, value) => {
    setMockData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const FieldLabel = ({ children }) => (
    <div className="text-xs font-bold text-slate-500 tracking-wider mb-1">
      {children}
    </div>
  );

  const FieldValue = ({ children }) => (
    <p className="text-sm text-slate-800">{children}</p>
  );

  const cardContent = (
    <div
      className={`w-full bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col ${
        embedded ? 'flex-1 min-h-0' : 'max-w-6xl min-h-[calc(100vh-3rem)]'
      }`}
    >
        {/* Inner layout: stepper + content */}
        <div className="flex flex-1 min-h-0">
          {/* Left stepper */}
          <nav className="w-56 shrink-0 bg-white border-r border-slate-200 py-6 pl-4 pr-2">
            <h2 className="text-xs font-bold text-slate-500 tracking-wider mb-4 px-2">
              Sections
            </h2>
            <ul className="space-y-0.5">
              {TABS.map((label, index) => {
                const isActive = activeTab === index;
                const Icon = TAB_ICONS[index];
                return (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => setActiveTab(index)}
                      className={`w-full flex items-center gap-3 px-2 py-2.5 rounded-md text-left transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-[#0056B3]'
                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                      }`}
                    >
                      <Icon
                        size={24}
                        className={`shrink-0 w-6 h-6 ${
                          isActive ? 'text-[#004E8C]' : 'text-slate-400'
                        }`}
                      />
                      <span
                        className={`text-sm truncate ${
                          isActive ? 'font-semibold' : 'font-normal'
                        }`}
                      >
                        {label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right content area */}
          <div className="flex-1 min-w-0 flex flex-col px-6 pb-6 pt-3">
            <div className="bg-white px-6 pb-6 pt-3 flex-1 min-h-0 overflow-auto" data-resident-history-scroll>
              {/* Card header with Edit button */}
              <div className="flex items-center justify-between w-full border-b border-slate-200 pb-3 mb-4">
                <h1 className="text-xl font-bold text-slate-900">
                  {TABS[activeTab]}
                </h1>
                {!isEditMode && (
                  <button
                    type="button"
                    onClick={() => setIsEditMode(true)}
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
                  >
                    <Pencil className="w-4 h-4" />
                    Edit
                  </button>
                )}
              </div>

              {/* Tab content */}
              {activeTab === 0 && (
                <GeneralTab
                  data={mockData.general}
                  isEditMode={isEditMode}
                  onFieldChange={(f, v) => handleFieldChange('general', f, v)}
                  FieldLabel={FieldLabel}
                  FieldValue={FieldValue}
                />
              )}
              {activeTab === 1 && (
                <HPITab
                  data={mockData.hpi}
                  isEditMode={isEditMode}
                  onFieldChange={(f, v) => handleFieldChange('hpi', f, v)}
                  FieldLabel={FieldLabel}
                  FieldValue={FieldValue}
                />
              )}
              {activeTab === 2 && (
                <FamilyHistoryTab
                  data={mockData.familyHistory}
                  isEditMode={isEditMode}
                  onFieldChange={(f, v) =>
                    handleFieldChange('familyHistory', f, v)
                  }
                  FieldLabel={FieldLabel}
                  FieldValue={FieldValue}
                />
              )}
              {activeTab === 3 && (
                <RelativesTab
                  data={mockData.relatives}
                  isEditMode={isEditMode}
                  onFieldChange={(f, v) => handleFieldChange('relatives', f, v)}
                  FieldLabel={FieldLabel}
                  FieldValue={FieldValue}
                />
              )}
              {activeTab === 4 && (
                <LifestyleTab
                  data={mockData.lifestyle}
                  isEditMode={isEditMode}
                  onFieldChange={(f, v) =>
                    handleFieldChange('lifestyle', f, v)
                  }
                  FieldLabel={FieldLabel}
                  FieldValue={FieldValue}
                />
              )}
              {activeTab === 5 && (
                <OtherTab
                  data={mockData.other}
                  isEditMode={isEditMode}
                  onFieldChange={(f, v) => handleFieldChange('other', f, v)}
                  FieldLabel={FieldLabel}
                  FieldValue={FieldValue}
                />
              )}
            </div>
          </div>
        </div>

        {/* Footer action bar - fixed at bottom of workspace card */}
        <footer className="shrink-0 border-t border-slate-200 bg-slate-50 px-6 py-4 flex items-center justify-end">
          {!isEditMode ? (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0056B3] rounded-md hover:bg-[#004494] transition-colors"
              >
                Save & Exit
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveChanges}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0056B3] rounded-md hover:bg-[#004494] transition-colors"
              >
                <Check className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          )}
        </footer>
    </div>
  );

  if (embedded) {
    return cardContent;
  }
  return (
    <div className="min-h-screen bg-[#F4F6F9] p-6 flex items-start justify-center">
      {cardContent}
    </div>
  );
}

// --- Tab content components ---

const RISK_FACTOR_OPTIONS = [
  'Varicose Veins',
  'Hypertension',
  'Diabetes',
  'Sickle Cell',
  'Fibroids',
  'PID (Pelvic Inflammatory Disease)',
  'Severe Migraine',
  'Heart Disease',
  'Thrombosis/Stroke',
  'Hepatitis',
  'Gall Bladder Condition',
  'Breast Disease',
  'Depression',
  'Allergies',
  'Infertility',
  'Asthma',
  'Epilepsy',
  'Contact Lenses',
];
const EXAM_STATUS_OPTIONS = ['N/A', 'Normal', 'Abnormal'];

const EXAMS_AND_TESTS_DEFINITION = [
  'Breast Exam',
  'Cardiac Echo',
  'ECG',
  'Gynecological Exam',
  'Mammogram',
  'Physical Exam',
  'Prostate Exam',
  'Rectal Exam',
  'Sigmoid/Colonoscopy',
  'Retinal Exam',
  'Flu Vaccination',
  'Pneumonia Vaccination',
  'LDL',
  'Hemoglobin',
  'PSA',
].map((name) => ({ examName: name, status: 'N/A', notes: '' }));

function GeneralTab({ data, isEditMode, onFieldChange, FieldLabel, FieldValue }) {
  const inputClass =
    'border border-slate-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm';
  const sectionLabelClass =
    'mb-3 text-xs font-bold tracking-wider text-slate-500 block';

  const selectedRiskFactors = data.riskFactors || [];
  const toggleRiskFactor = (name) => {
    const next = selectedRiskFactors.includes(name)
      ? selectedRiskFactors.filter((x) => x !== name)
      : [...selectedRiskFactors, name];
    onFieldChange('riskFactors', next);
  };

  const examsAndTests = data.examsAndTests || [];
  const updateExam = (examName, field, value) => {
    const next = EXAMS_AND_TESTS_DEFINITION.map((def) => {
      const existing =
        examsAndTests.find((e) => e.examName === def.examName) || def;
      if (def.examName === examName) {
        return { ...existing, [field]: value };
      }
      return existing;
    });
    onFieldChange('examsAndTests', next);
  };

  return (
    <div className={isEditMode ? 'space-y-8' : 'space-y-5'}>
      {/* Risk Factors */}
      <section className={!isEditMode ? 'border-b border-slate-200 pb-4 mb-4' : ''}>
        <span className={sectionLabelClass}>Risk Factors</span>
        {!isEditMode ? (
          <div className="w-full">
            <div className="flex flex-wrap gap-2">
              {selectedRiskFactors.length > 0 ? (
                selectedRiskFactors
                  .map((item) =>
                    item === 'Diabetes' ? 'Diabetes Type 2' : item
                  )
                  .map((label) => (
                    <span
                      key={label}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-slate-700 border border-slate-200"
                    >
                      {label}
                    </span>
                  ))
              ) : (
                <span className="text-sm font-medium text-slate-900">
                  None selected
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3 mt-2">
            {RISK_FACTOR_OPTIONS.map((name) => {
              const selected = selectedRiskFactors.includes(name);
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => toggleRiskFactor(name)}
                  className={
                    selected
                      ? 'px-4 py-1.5 rounded-full text-sm font-medium border border-blue-300 bg-blue-50 text-blue-600 transition-colors'
                      : 'px-4 py-1.5 rounded-full text-sm font-medium border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors'
                  }
                >
                  {name}
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* Exams / Tests */}
      <section className={!isEditMode ? 'border-b border-slate-200 pb-6 mb-6' : ''}>
        <span className={sectionLabelClass}>Exams / Tests</span>
        {!isEditMode ? (
          <div className="w-full">
            {(() => {
              const list =
                (data.examsAndTests || EXAMS_AND_TESTS_DEFINITION).filter(
                  (exam) =>
                    exam &&
                    ((exam.status && exam.status !== 'N/A') ||
                      (exam.notes && exam.notes.trim() !== ''))
                );
              if (list.length === 0) {
                return (
                  <p className="text-sm font-medium text-slate-900">
                    —
                  </p>
                );
              }
              return (
                <ul className="flex flex-col space-y-3">
                  {list.map((exam) => {
                    const parts = [];
                    if (exam.status && exam.status !== 'N/A') {
                      parts.push(exam.status);
                    }
                    if (exam.notes && exam.notes.trim() !== '') {
                      parts.push(exam.notes.trim());
                    }
                    const result = parts.join(' - ');
                    return (
                      <li
                        key={exam.examName}
                        className="text-sm text-slate-700"
                      >
                        <span className="font-semibold text-slate-900">
                          {exam.examName}:
                        </span>{' '}
                        {result}
                      </li>
                    );
                  })}
                </ul>
              );
            })()}
          </div>
        ) : (
          <div className="w-full">
            <div className="grid grid-cols-12 gap-4 mb-2 pb-2 border-b border-slate-200 text-xs font-bold text-slate-500">
              <div className="col-span-3">Exam Name</div>
              <div className="col-span-4">Status</div>
              <div className="col-span-5">Date / Notes</div>
            </div>
            <div>
              {EXAMS_AND_TESTS_DEFINITION.map((def) => {
                const current =
                  examsAndTests.find(
                    (e) => e.examName === def.examName
                  ) || def;
                return (
                  <div
                    key={def.examName}
                    className="grid grid-cols-12 gap-4 items-center py-2 border-b border-slate-50 last:border-0"
                  >
                    <div className="col-span-3">
                      <span className="text-sm font-semibold text-slate-800">
                        {def.examName}
                      </span>
                    </div>
                    <div className="col-span-4">
                      <div className="inline-flex bg-slate-100 rounded-md p-1 space-x-1">
                        {EXAM_STATUS_OPTIONS.map((statusOption) => {
                          const isActive = current.status === statusOption;
                          const activeClass =
                            statusOption === 'N/A'
                              ? 'bg-slate-500 text-white shadow-sm'
                              : statusOption === 'Normal'
                                ? 'bg-teal-600 text-white shadow-sm'
                                : 'bg-red-600 text-white shadow-sm';
                          return (
                            <button
                            key={statusOption}
                            type="button"
                            onClick={() =>
                              updateExam(def.examName, 'status', statusOption)
                            }
                            className={`px-3 py-1 rounded-md text-sm font-medium ${
                              isActive
                                ? activeClass
                                : 'text-slate-500 hover:text-slate-700'
                            }`}
                          >
                              {statusOption}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="col-span-5">
                      <input
                        type="text"
                        value={current.notes}
                        onChange={(e) =>
                          updateExam(def.examName, 'notes', e.target.value)
                        }
                        placeholder="MM/DD/YYYY or Notes"
                        className="w-full text-sm border-slate-200 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Specify Other */}
      <section>
        <span className={sectionLabelClass}>Specify Other</span>
        {!isEditMode ? (
          <div className="mt-1 space-y-2">
            {data.contraceptiveComplication && (
              <div>
                <span className="font-semibold text-slate-700">Contraceptive Complication: </span>
                <span className="text-slate-600">{data.contraceptiveComplication}</span>
              </div>
            )}
            {(data.otherSpecify || !data.contraceptiveComplication) && (
              <div>
                {data.contraceptiveComplication && (
                  <span className="font-semibold text-slate-700">Other: </span>
                )}
                <span className="text-slate-600">{data.otherSpecify || 'None'}</span>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <label className="text-xs font-medium text-slate-700 mb-1 block">
                Contraceptive Complication
              </label>
              <textarea
                value={data.contraceptiveComplication || ''}
                onChange={(e) => onFieldChange('contraceptiveComplication', e.target.value)}
                placeholder="Describe any complications..."
                className={`${inputClass} min-h-[80px]`}
                rows={3}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-700 mb-1 block">
                Other Specify
              </label>
              <input
                type="text"
                value={data.otherSpecify || ''}
                onChange={(e) => onFieldChange('otherSpecify', e.target.value)}
                placeholder="Requires wheelchair assistance..."
                className={inputClass}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function HPITab({ data, isEditMode, onFieldChange, FieldLabel, FieldValue }) {
  const severityOptions = ['Mild', 'Moderate', 'Severe', 'Fatal'];
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-5">
      <div>
        <FieldLabel>Location</FieldLabel>
        {isEditMode ? (
          <input
            type="text"
            value={data.location}
            onChange={(e) => onFieldChange('location', e.target.value)}
            className="border border-slate-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          />
        ) : (
          <FieldValue>{data.location}</FieldValue>
        )}
      </div>
      <div>
        <FieldLabel>Quality</FieldLabel>
        {isEditMode ? (
          <input
            type="text"
            value={data.quality}
            onChange={(e) => onFieldChange('quality', e.target.value)}
            className="border border-slate-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          />
        ) : (
          <FieldValue>{data.quality}</FieldValue>
        )}
      </div>
      <div>
        <FieldLabel>Severity</FieldLabel>
        {isEditMode ? (
          <select
            value={data.severityValue}
            onChange={(e) => {
              onFieldChange('severityValue', e.target.value);
              onFieldChange(
                'severity',
                `${e.target.value} (Pain scale 5/10).`
              );
            }}
            className="border border-slate-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          >
            {severityOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <FieldValue>{data.severity}</FieldValue>
        )}
      </div>
      <div>
        <FieldLabel>Duration</FieldLabel>
        {isEditMode ? (
          <input
            type="text"
            value={data.duration}
            onChange={(e) => onFieldChange('duration', e.target.value)}
            className="border border-slate-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          />
        ) : (
          <FieldValue>{data.duration}</FieldValue>
        )}
      </div>
      <div>
        <FieldLabel>Timing</FieldLabel>
        {isEditMode ? (
          <input
            type="text"
            value={data.timing}
            onChange={(e) => onFieldChange('timing', e.target.value)}
            className="border border-slate-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          />
        ) : (
          <FieldValue>{data.timing}</FieldValue>
        )}
      </div>
      <div>
        <FieldLabel>Context</FieldLabel>
        {isEditMode ? (
          <input
            type="text"
            value={data.context}
            onChange={(e) => onFieldChange('context', e.target.value)}
            className="border border-slate-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          />
        ) : (
          <FieldValue>{data.context}</FieldValue>
        )}
      </div>
      <div>
        <FieldLabel>Associated Signs/Symptoms</FieldLabel>
        {isEditMode ? (
          <input
            type="text"
            value={data.associatedSigns}
            onChange={(e) => onFieldChange('associatedSigns', e.target.value)}
            className="border border-slate-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          />
        ) : (
          <FieldValue>{data.associatedSigns}</FieldValue>
        )}
      </div>
      <div className="col-span-2">
        <FieldLabel>Modifying factors</FieldLabel>
        {isEditMode ? (
          <textarea
            value={data.modifyingFactors}
            onChange={(e) => onFieldChange('modifyingFactors', e.target.value)}
            className="border border-slate-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm min-h-[80px]"
            rows={3}
          />
        ) : (
          <FieldValue>{data.modifyingFactors}</FieldValue>
        )}
      </div>
    </div>
  );
}

const mockSearchResults = [
  { id: 'A01.09', label: 'Typhoid fever with other complications' },
  { id: 'A01.2', label: 'Paratyphoid fever B' },
  { id: 'A01.3', label: 'Paratyphoid fever C' },
  { id: 'A01.4', label: 'Paratyphoid fever, unspecified' },
  { id: 'A77.0', label: 'Spotted fever due to Rickettsia rickettsii' },
];

function FamilyHistoryTab({
  data,
  isEditMode,
  onFieldChange,
  FieldLabel,
  FieldValue,
}) {
  const [familyDiagnoses, setFamilyDiagnoses] = useState({
    siblings: data.siblingsDiagnoses?.length ? data.siblingsDiagnoses : [{ id: 'E11.9', label: 'Type 2 Diabetes' }],
    spouse: data.spouseDiagnoses || [],
    offspring: data.offspringDiagnoses || [],
  });
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTab, setDropdownTab] = useState('ICD-10');
  const [searchQuery, setSearchQuery] = useState('fever');
  const dropdownRef = useRef(null);

  useEffect(() => {
    setFamilyDiagnoses({
      siblings: data.siblingsDiagnoses || [],
      spouse: data.spouseDiagnoses || [],
      offspring: data.offspringDiagnoses || [],
    });
  }, [data.siblingsDiagnoses, data.spouseDiagnoses, data.offspringDiagnoses]);

  useEffect(() => {
    if (!activeDropdown) return;
    const handleClickOutside = (e) => {
      const inDropdown = dropdownRef.current && dropdownRef.current.contains(e.target);
      const inTrigger = e.target.closest('[data-add-diagnosis-trigger]');
      if (!inDropdown && !inTrigger) setActiveDropdown(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const syncDiagnosesToParent = (key, list) => {
    onFieldChange(key, list);
  };

  const diagnosesKey = (field) => (field === 'siblings' ? 'siblingsDiagnoses' : field === 'spouse' ? 'spouseDiagnoses' : 'offspringDiagnoses');

  const addDiagnosis = (field, item) => {
    const list = familyDiagnoses[field] || [];
    if (list.some((d) => d.id === item.id)) return;
    const newItem = { id: item.id, label: item.label.includes(item.id) ? item.label : `${item.id} - ${item.label}` };
    const next = [...list, newItem];
    syncDiagnosesToParent(diagnosesKey(field), next);
    setActiveDropdown(null);
    setSearchQuery('fever');
  };

  const removeDiagnosis = (field, index) => {
    const list = familyDiagnoses[field] || [];
    const next = list.filter((_, i) => i !== index);
    syncDiagnosesToParent(diagnosesKey(field), next);
  };

  const filteredResults = mockSearchResults.filter(
    (d) => !searchQuery || d.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const inputClass =
    'border border-slate-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm';
  const labelClass = 'text-[11px] font-bold text-slate-500 tracking-wider mb-1 block';

  const DiagnosisChips = ({ diagnoses, field }) => (
    <div className="flex flex-wrap gap-2">
      {(diagnoses || []).map((d, i) => (
        <span
          key={`${d.id}-${i}`}
          className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 rounded-full px-3 py-1.5 text-sm cursor-pointer hover:bg-slate-200"
        >
          {d.label}
          {isEditMode && (
            <button
              type="button"
              onClick={() => removeDiagnosis(field, i)}
              className="p-0.5 rounded hover:bg-slate-300"
              aria-label="Remove"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </span>
      ))}
    </div>
  );

  const DiagnosisDropdown = ({ field }) => {
    if (activeDropdown !== field) return null;
    return (
      <div
        ref={dropdownRef}
        className="relative w-full mt-2 bg-white border border-slate-200 rounded-md shadow-sm mb-4"
      >
        <div className="px-3 pb-2 font-medium text-slate-900">Add Diagnosis</div>
        <div className="flex gap-1 px-3 pb-2">
          {['ICD-10', 'SNOMED', 'DSM-5'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setDropdownTab(tab)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                dropdownTab === tab
                  ? 'bg-white text-blue-600 border border-slate-200 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative px-3 pb-2">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="fever"
            className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div className="max-h-80 overflow-y-auto">
          {filteredResults.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => addDiagnosis(field, item)}
              className="w-full text-left px-3 py-3 text-sm text-slate-800 hover:bg-slate-50 cursor-pointer flex gap-4 border-b border-slate-100 last:border-0"
            >
              <span className="font-bold shrink-0">{item.id}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Row: Siblings */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <div>
          <label className={labelClass}>Siblings</label>
          {isEditMode ? (
            <input
              type="text"
              value={data.siblings}
              onChange={(e) => onFieldChange('siblings', e.target.value)}
              className={inputClass}
              placeholder="e.g. 2 Sisters"
            />
          ) : (
            <FieldValue>{data.siblings}</FieldValue>
          )}
        </div>
        <div className="relative">
          <FieldLabel>Diagnosis / ICD Codes</FieldLabel>
          {!isEditMode ? (
            <FieldValue>
              {familyDiagnoses.siblings.length > 0
                ? familyDiagnoses.siblings.map((d) => d.label).join(', ')
                : 'None reported'}
            </FieldValue>
          ) : (
            <div className="space-y-2">
              <DiagnosisChips diagnoses={familyDiagnoses.siblings} field="siblings" />
              <div className="relative">
                <input
                  data-add-diagnosis-trigger
                  type="text"
                  readOnly
                  placeholder="Add Diagnosis..."
                  onClick={() => setActiveDropdown(activeDropdown === 'siblings' ? null : 'siblings')}
                  className={`${inputClass} cursor-pointer placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500`}
                />
                <DiagnosisDropdown field="siblings" />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Row: Spouse */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <div>
          <label className={labelClass}>Spouse</label>
          {isEditMode ? (
            <input
              type="text"
              value={data.spouse}
              onChange={(e) => onFieldChange('spouse', e.target.value)}
              className={inputClass}
              placeholder="e.g. John Smith"
            />
          ) : (
            <FieldValue>{data.spouse}</FieldValue>
          )}
        </div>
        <div className="relative">
          <FieldLabel>Diagnosis / ICD Codes</FieldLabel>
          {!isEditMode ? (
            <FieldValue>
              {familyDiagnoses.spouse.length > 0
                ? familyDiagnoses.spouse.map((d) => d.label).join(', ')
                : 'None reported'}
            </FieldValue>
          ) : (
            <div className="space-y-2">
              <DiagnosisChips diagnoses={familyDiagnoses.spouse} field="spouse" />
              <div className="relative">
                <input
                  data-add-diagnosis-trigger
                  type="text"
                  readOnly
                  placeholder="Add Diagnosis..."
                  onClick={() => setActiveDropdown(activeDropdown === 'spouse' ? null : 'spouse')}
                  className={`${inputClass} cursor-pointer placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500`}
                />
                <DiagnosisDropdown field="spouse" />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Row: Offspring */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <div>
          <label className={labelClass}>Offspring</label>
          {isEditMode ? (
            <input
              type="text"
              value={data.offspring}
              onChange={(e) => onFieldChange('offspring', e.target.value)}
              className={inputClass}
              placeholder="e.g. Name or count"
            />
          ) : (
            <FieldValue>{data.offspring || 'None recorded'}</FieldValue>
          )}
        </div>
        <div className="relative">
          <FieldLabel>Diagnosis / ICD Codes</FieldLabel>
          {!isEditMode ? (
            <FieldValue>
              {familyDiagnoses.offspring.length > 0
                ? familyDiagnoses.offspring.map((d) => d.label).join(', ')
                : 'None reported'}
            </FieldValue>
          ) : (
            <div className="space-y-2">
              <DiagnosisChips diagnoses={familyDiagnoses.offspring} field="offspring" />
              <div className="relative">
                <input
                  data-add-diagnosis-trigger
                  type="text"
                  readOnly
                  placeholder="Add Diagnosis..."
                  onClick={() => setActiveDropdown(activeDropdown === 'offspring' ? null : 'offspring')}
                  className={`${inputClass} cursor-pointer placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500`}
                />
                <DiagnosisDropdown field="offspring" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function RelativesTab({
  data,
  isEditMode,
  onFieldChange,
  FieldLabel,
  FieldValue,
}) {
  const fields = [
    ['cancer', 'Cancer'],
    ['tuberculosis', 'Tuberculosis'],
    ['diabetes', 'Diabetes'],
    ['highBloodPressure', 'High Blood Pressure'],
    ['heartProblems', 'Heart Problems'],
    ['stroke', 'Stroke'],
    ['epilepsy', 'Epilepsy'],
    ['mentalIllness', 'Mental Illness'],
    ['suicide', 'Suicide'],
  ];
  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
      {fields.map(([key, label]) => (
        <div key={key}>
          <FieldLabel>{label}</FieldLabel>
          {isEditMode ? (
            <input
              type="text"
              value={data[key]}
              onChange={(e) => onFieldChange(key, e.target.value)}
              className="border border-slate-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            />
          ) : (
            <FieldValue>{data[key]}</FieldValue>
          )}
        </div>
      ))}
    </div>
  );
}

const LIFESTYLE_SECTION_HEADER = 'text-[11px] font-bold tracking-wider text-slate-500 mb-3 block';
const LIFESTYLE_VIEW_LABEL = 'text-[11px] font-bold tracking-wider text-slate-500 mb-1 block';
const TOBACCO_STATUS_OPTIONS = ['Never Smoker', 'Current Smoker', 'Former Smoker'];

function LifestyleTab({
  data,
  isEditMode,
  onFieldChange,
  FieldLabel,
  FieldValue,
}) {
  const compactInputClass =
    'w-full text-sm py-1.5 px-2.5 border border-slate-200 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none';
  const compactDateInputClass =
    'date-input-compact w-[150px] h-[36px] pl-3 pr-8 text-sm bg-slate-50 border border-slate-200 rounded-md focus:border-blue-500 focus:ring-blue-500 outline-none';

  const SegmentedToggle = ({ field, options }) => (
    <div className="w-full inline-flex bg-slate-50 border border-slate-100 rounded-md p-1 box-border">
      {options.map((opt) => {
        const active = (data[field] || '') === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onFieldChange(field, opt)}
            className={`flex-1 py-1 px-2 text-xs rounded-md transition-colors font-medium ${
              active
                ? 'bg-white shadow-sm text-blue-600'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="space-y-6">
      {!isEditMode ? (
        /* View Mode: strict data table card (read-only) */
        <>
          <div className="w-full border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm mt-3">
            <div className="grid grid-cols-12 gap-3 bg-slate-50 border-b border-slate-200 px-5 py-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider items-center">
              <div className="col-span-3">HABIT / ACTIVITY</div>
              <div className="col-span-3">STATUS</div>
              <div className="col-span-6">DETAILS & DATES</div>
            </div>

            {[
              { label: 'Tobacco', statusField: 'tobaccoStatus', detailsField: 'tobaccoAmount', startField: 'tobaccoStart', endField: 'tobaccoEnd' },
              { label: 'Alcohol', statusField: 'alcoholStatus', detailsField: 'alcoholDetails', startField: 'alcoholStart', endField: 'alcoholEnd' },
              { label: 'Recreational Drugs', statusField: 'recreationalStatus', detailsField: 'recreationalDetails', startField: 'recreationalStart', endField: 'recreationalEnd' },
              { label: 'Coffee', statusField: 'coffeeStatus', detailsField: 'coffeeDetails', startField: 'coffeeStart', endField: 'coffeeEnd' },
              { label: 'Counseling', statusField: 'counselingStatus', detailsField: 'counselingDetails', startField: 'counselingStartDate', endField: 'counselingEndDate' },
              { label: 'Exercise Patterns', statusField: 'exerciseStatus', detailsField: 'exerciseDetails', startField: 'exerciseStartDate', endField: 'exerciseEndDate' },
              { label: 'Hazardous Activities', statusField: 'hazardousStatus', detailsField: 'hazardousDetails', startField: 'hazardousDate', endField: 'hazardousEndDate' },
            ].map((row) => {
              const status = data[row.statusField] || '';
              const details = data[row.detailsField] || '';
              const startDate = data[row.startField] || '';
              const endDate = data[row.endField] || '';
              const isActive = status === 'Current' || status === 'Active' || status === 'Ongoing';
              return (
                <div
                  key={row.label}
                  className="grid grid-cols-12 gap-3 items-center px-5 py-2.5 border-b border-slate-200 last:border-0 hover:bg-slate-50/50 transition-colors"
                >
                  <div className="col-span-3 text-[13px] font-semibold text-slate-800">{row.label}</div>
                  <div className="col-span-3">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-md text-xs font-medium ${
                        isActive ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {status || 'N/A'}
                    </span>
                  </div>
                  <div className="col-span-6 flex flex-col space-y-0.5 text-[13px] text-slate-600">
                    <span className="truncate">{details || 'No details provided'}</span>
                    {(startDate || endDate) && (
                      <span className="text-xs text-slate-400">
                        {startDate ? startDate : ''} {endDate ? `- ${endDate}` : ''}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <div className="text-sm font-bold text-slate-700">Sleep Patterns</div>
              <div className="text-sm text-slate-600">{data.sleepPatterns || '—'}</div>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-700">Seatbelt Use</div>
              <div className="text-sm text-slate-600">{data.seatbeltUse || '—'}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Single continuous list: Substance Use + Wellness (no gap between Coffee and Counseling) */}
          <section className="mb-0">
            <h3 className={LIFESTYLE_SECTION_HEADER}>Substance Use History</h3>
            <div className="grid grid-cols-12 gap-4 mb-2 pb-2 border-b border-slate-200 text-xs font-bold text-slate-500">
              <div className="col-span-2">Substance</div>
              <div className="col-span-3">Details / Frequency</div>
              <div className="col-span-3">Status</div>
              <div className="col-span-4">Date Range</div>
            </div>

            {[
              {
                label: 'Tobacco',
                detailsField: 'tobaccoAmount',
                detailsPlaceholder: '1 pack/day',
                statusField: 'tobaccoStatus',
                statusOptions: TOBACCO_STATUS_OPTIONS,
                startField: 'tobaccoStart',
                endField: 'tobaccoEnd',
                startTitle: 'Start Date',
              },
              {
                label: 'Alcohol',
                detailsField: 'alcoholDetails',
                detailsPlaceholder: 'Details...',
                statusField: 'alcoholStatus',
                statusOptions: ['N/A', 'Quite', 'Never', 'Current'],
                startField: 'alcoholStart',
                endField: 'alcoholEnd',
                startTitle: 'Start Date',
              },
              {
                label: 'Recreational Drugs',
                detailsField: 'recreationalDetails',
                detailsPlaceholder: 'Details...',
                statusField: 'recreationalStatus',
                statusOptions: ['N/A', 'Quite', 'Never', 'Current'],
                startField: 'recreationalStart',
                endField: 'recreationalEnd',
                startTitle: 'Start Date',
              },
              {
                label: 'Coffee',
                detailsField: 'coffeeDetails',
                detailsPlaceholder: 'e.g., 2 cups/morning',
                statusField: 'coffeeStatus',
                statusOptions: ['N/A', 'Quite', 'Never', 'Current'],
                startField: 'coffeeStart',
                endField: 'coffeeEnd',
                startTitle: 'Start Date',
              },
              {
                label: 'Counseling',
                detailsField: 'counselingDetails',
                detailsPlaceholder: 'e.g., Weekly therapy',
                statusField: 'counselingStatus',
                statusOptions: ['N/A', 'Quite', 'Never', 'Current'],
                startField: 'counselingStartDate',
                endField: 'counselingEndDate',
                startTitle: 'Start Date',
              },
              {
                label: 'Exercise Patterns',
                detailsField: 'exerciseDetails',
                detailsPlaceholder: 'Gym 3x/week',
                statusField: 'exerciseStatus',
                statusOptions: ['N/A', 'Quite', 'Never', 'Current'],
                startField: 'exerciseStartDate',
                endField: 'exerciseEndDate',
                startTitle: 'Start Date',
              },
              {
                label: 'Hazardous Activities',
                detailsField: 'hazardousDetails',
                detailsPlaceholder: 'Describe...',
                statusField: 'hazardousStatus',
                statusOptions: ['N/A', 'Quite', 'Never', 'Current'],
                startField: 'hazardousDate',
                endField: 'hazardousEndDate',
                startTitle: 'Date',
              },
            ].map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-12 gap-4 items-center py-2 border-b border-slate-50 last:border-0"
              >
                <div className="col-span-2 text-sm font-semibold text-slate-700">
                  {row.label}
                </div>
                <div className="col-span-3">
                  <input
                    type="text"
                    value={data[row.detailsField] ?? ''}
                    onChange={(e) =>
                      onFieldChange(row.detailsField, e.target.value)
                    }
                    placeholder={row.detailsPlaceholder}
                    className={compactInputClass}
                  />
                </div>
                {row.label === 'Tobacco' ? (
                  <div className="col-span-3 flex items-center justify-start m-0 p-0">
                    <div className="relative w-full">
                      <select
                        value={data[row.statusField] ?? 'Unassigned'}
                        onChange={(e) =>
                          onFieldChange(row.statusField, e.target.value)
                        }
                        className="w-full h-[36px] m-0 pl-[16px] pr-8 py-1 text-sm bg-white border border-slate-200 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 outline-none appearance-none box-border"
                      >
                        <option value="Unassigned">Unassigned</option>
                        <option value="Current every day smoker">Current every day smoker</option>
                        <option value="Current some day smoker">Current some day smoker</option>
                        <option value="Former smoker">Former smoker</option>
                        <option value="Never smoker">Never smoker</option>
                        <option value="Smoker, current status unknown">Smoker, current status unknown</option>
                        <option value="Unknown if ever smoked">Unknown if ever smoked</option>
                        <option value="Heavy tobacco smoker">Heavy tobacco smoker</option>
                        <option value="Light tobacco smoker">Light tobacco smoker</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                ) : (
                  <div className="col-span-3 flex items-center justify-start m-0 p-0">
                    <div className="w-full">
                      <SegmentedToggle
                        field={row.statusField}
                        options={row.statusOptions}
                      />
                    </div>
                  </div>
                )}
                <div className="col-span-4">
                  <div className="flex items-center space-x-2 w-full">
                    <input
                      type="date"
                      value={data[row.startField] || ''}
                      onChange={(e) =>
                        onFieldChange(row.startField, e.target.value)
                      }
                      title={row.startTitle || 'Start Date'}
                      className={compactDateInputClass}
                    />
                    <span className="text-slate-400">-</span>
                    <input
                      type="date"
                      value={data[row.endField] || ''}
                      onChange={(e) =>
                        onFieldChange(row.endField, e.target.value)
                      }
                      title="End Date"
                      className={compactDateInputClass}
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Section 3: Other Factors */}
          <section>
            <h3 className={LIFESTYLE_SECTION_HEADER}>Other Factors</h3>
            <div className="grid grid-cols-4 gap-4 items-start">
              <div className="text-sm font-semibold text-slate-700 pt-2">
                Sleep Patterns
              </div>
              <div className="col-span-3">
                <textarea
                  value={data.sleepPatterns ?? ''}
                  onChange={(e) => onFieldChange('sleepPatterns', e.target.value)}
                  placeholder="Describe typical sleep duration and quality..."
                  className={`${compactInputClass} resize-y`}
                  rows={2}
                />
              </div>

              <div className="text-sm font-semibold text-slate-700 pt-2">
                Seatbelt Use
              </div>
              <div className="col-span-3">
                <input
                  type="text"
                  value={data.seatbeltUse ?? ''}
                  onChange={(e) => onFieldChange('seatbeltUse', e.target.value)}
                  placeholder="Always wears seatbelt"
                  className={compactInputClass}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

const OTHER_TAB_LABEL = 'text-[11px] font-bold text-slate-500 tracking-wider mb-1 block';
const OTHER_TAB_INPUT = 'w-full border border-slate-200 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none';

function OtherTab({ data, isEditMode, onFieldChange, FieldLabel, FieldValue }) {
  return (
    <div className="space-y-6">
      {/* Row 1: Name/Value pairs - two columns */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <div>
          <label className={OTHER_TAB_LABEL}>Name/Value:</label>
          {isEditMode ? (
            <div className="space-y-2">
              <input
                type="text"
                value={data.name1 ?? ''}
                onChange={(e) => onFieldChange('name1', e.target.value)}
                placeholder="Name 1"
                className={OTHER_TAB_INPUT}
              />
              <input
                type="text"
                value={data.value1 ?? ''}
                onChange={(e) => onFieldChange('value1', e.target.value)}
                placeholder="Value 1"
                className={OTHER_TAB_INPUT}
              />
            </div>
          ) : (
            <div className="space-y-1">
              <FieldValue>{data.name1 || '—'}</FieldValue>
              <FieldValue>{data.value1 || '—'}</FieldValue>
            </div>
          )}
        </div>
        <div>
          <label className={OTHER_TAB_LABEL}>Name/Value:</label>
          {isEditMode ? (
            <div className="space-y-2">
              <input
                type="text"
                value={data.name2 ?? ''}
                onChange={(e) => onFieldChange('name2', e.target.value)}
                placeholder="Name 2"
                className={OTHER_TAB_INPUT}
              />
              <input
                type="text"
                value={data.value2 ?? ''}
                onChange={(e) => onFieldChange('value2', e.target.value)}
                placeholder="Value 2"
                className={OTHER_TAB_INPUT}
              />
            </div>
          ) : (
            <div className="space-y-1">
              <FieldValue>{data.name2 || '—'}</FieldValue>
              <FieldValue>{data.value2 || '—'}</FieldValue>
            </div>
          )}
        </div>
      </div>

      {/* Row 2: Additional History */}
      <div>
        <label className={OTHER_TAB_LABEL}>Additional History:</label>
        {isEditMode ? (
          <textarea
            value={data.additionalHistory ?? ''}
            onChange={(e) => onFieldChange('additionalHistory', e.target.value)}
            className={`${OTHER_TAB_INPUT} min-h-[100px] resize-y`}
            rows={4}
            placeholder="Additional history..."
          />
        ) : (
          <FieldValue>{data.additionalHistory || '—'}</FieldValue>
        )}
      </div>
    </div>
  );
}
