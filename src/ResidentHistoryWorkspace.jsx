import { useState, useEffect, useRef } from 'react';
import { ChevronRight, Pencil, Check, X, Search, Calendar, ChevronDown } from 'lucide-react';

const TABS = [
  'General',
  'History of Present Illness',
  'Family History',
  'Relatives',
  'Lifestyle',
  'Other',
];

const INITIAL_MOCK_DATA = {
  general: {
    riskFactorsSelected: ['Hypertension', 'Diabetes'],
    exams: [
      { id: 'breast', name: 'Breast Exam', status: 'Normal', dateNotes: '' },
      { id: 'cardiac', name: 'Cardiac Echo', status: 'N/A', dateNotes: '' },
      { id: 'ecg', name: 'ECG', status: 'Abnormal', dateNotes: 'Irregular heartbeat detected' },
      { id: 'physical', name: 'Physical Exam', status: 'Normal', dateNotes: '01/15/2024' },
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
    exerciseDetails: 'Gym 3x/week',
    exerciseStatus: 'Active',
    exerciseStartDate: '',
    hazardousDetails: '',
    hazardousStatus: 'No',
    hazardousDate: '',
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
      const exams = general.exams || [];
      const examsSummary =
        exams.length > 0
          ? exams
              .map((e) => `${e.name}: ${e.status}${e.dateNotes ? ` - ${e.dateNotes}` : ''}`)
              .join('. ')
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

  const goPrevious = () => {
    setActiveTab((t) => (t > 0 ? t - 1 : t));
  };

  const goNext = () => {
    setActiveTab((t) => (t < TABS.length - 1 ? t + 1 : t));
  };

  const FieldLabel = ({ children }) => (
    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
      {children}
    </div>
  );

  const FieldValue = ({ children }) => (
    <p className="text-sm text-slate-800">{children}</p>
  );

  const cardContent = (
    <div
      className={`w-full bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex flex-col ${
        embedded ? 'flex-1 min-h-0' : 'max-w-6xl min-h-[calc(100vh-3rem)]'
      }`}
    >
        {/* Inner layout: stepper + content */}
        <div className="flex flex-1 min-h-0">
          {/* Left stepper */}
          <nav className="w-56 shrink-0 bg-white border-r border-slate-200 py-6 pl-4 pr-2">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-2">
              Sections
            </h2>
            <ul className="space-y-0.5">
              {TABS.map((label, index) => {
                const isActive = activeTab === index;
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
                      <span
                        className={`flex shrink-0 w-5 h-5 rounded-full items-center justify-center ${
                          isActive ? 'bg-[#0056B3]' : 'bg-slate-200'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isActive ? 'bg-white' : 'bg-slate-400'
                          }`}
                        />
                      </span>
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

          {/* Right content card */}
          <div className="flex-1 min-w-0 flex flex-col p-6">
            <div className="bg-white rounded-lg border border-slate-200 p-6 flex-1 min-h-0 overflow-auto">
              {/* Card header with Edit button */}
              <div className="flex items-center justify-between mb-6">
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
        <footer className="shrink-0 border-t border-slate-200 bg-slate-50 px-6 py-4 flex items-center justify-between">
          {!isEditMode ? (
            <>
              <button
                type="button"
                onClick={goPrevious}
                disabled={activeTab === 0}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-100 transition-colors"
                >
                  Save & Exit
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={activeTab === TABS.length - 1}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[#0056B3] rounded-md hover:bg-[#004494] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-[#FFFFFF]"
                >
                  Next Step
                  <ChevronRight className="w-4 h-4 text-[#FFFFFF]" />
                </button>
              </div>
            </>
          ) : (
            <>
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
            </>
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
  'Hypertension',
  'Diabetes',
  'Sickle Cell',
  'Heart Disease',
  'Allergies',
  'Epilepsy',
  'Fibroids',
  'Asthma',
  'Other',
];
const EXAM_STATUS_OPTIONS = ['N/A', 'Normal', 'Abnormal'];

function GeneralTab({ data, isEditMode, onFieldChange, FieldLabel, FieldValue }) {
  const inputClass =
    'border border-slate-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none text-sm';
  const sectionLabelClass = 'text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block';

  const riskFactorsSelected = data.riskFactorsSelected || [];
  const toggleRiskFactor = (name) => {
    const next = riskFactorsSelected.includes(name)
      ? riskFactorsSelected.filter((x) => x !== name)
      : [...riskFactorsSelected, name];
    onFieldChange('riskFactorsSelected', next);
  };

  const handleExamChange = (index, field, value) => {
    const exams = data.exams || [];
    const next = exams.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    onFieldChange('exams', next);
  };

  return (
    <div className="space-y-8">
      {/* RISK FACTORS */}
      <section>
        <span className={sectionLabelClass}>RISK FACTORS</span>
        {!isEditMode ? (
          <p className="text-sm text-slate-800">
            {riskFactorsSelected.length > 0
              ? `Fall Risk, ${riskFactorsSelected.join(', ')}${riskFactorsSelected.includes('Diabetes') ? ' Type 2' : ''}`
              : 'None selected'}
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {RISK_FACTOR_OPTIONS.map((name) => {
              const selected = riskFactorsSelected.includes(name);
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => toggleRiskFactor(name)}
                  className={`rounded-full px-3 py-1 text-sm font-medium cursor-pointer transition-colors ${
                    selected
                      ? 'bg-blue-100 text-blue-700 border border-blue-300'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-transparent'
                  }`}
                >
                  {name}
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* EXAMS / TESTS */}
      <section>
        <span className={sectionLabelClass}>EXAMS / TESTS</span>
        {!isEditMode ? (
          <p className="text-sm text-slate-800">{data.examsSummary || ''}</p>
        ) : (
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left text-[11px] font-bold text-slate-500 uppercase tracking-wider py-2.5 px-3">
                    Exam Name
                  </th>
                  <th className="text-left text-[11px] font-bold text-slate-500 uppercase tracking-wider py-2.5 px-3">
                    Status
                  </th>
                  <th className="text-left text-[11px] font-bold text-slate-500 uppercase tracking-wider py-2.5 px-3">
                    Date / Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {(data.exams || []).map((row, index) => (
                  <tr key={row.id} className="border-b border-slate-100 last:border-0">
                    <td className="py-2.5 px-3 text-slate-800 font-medium">{row.name}</td>
                    <td className="py-2.5 px-3">
                      <div className="flex gap-1">
                        {EXAM_STATUS_OPTIONS.map((status) => {
                          const isSelected = row.status === status;
                          const selectedClass =
                            status === 'Normal'
                              ? 'bg-emerald-600 text-white'
                              : status === 'Abnormal'
                                ? 'bg-red-600 text-white'
                                : 'bg-slate-200 text-slate-700';
                          return (
                            <button
                              key={status}
                              type="button"
                              onClick={() => handleExamChange(index, 'status', status)}
                              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                                isSelected ? selectedClass : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                              }`}
                            >
                              {status}
                            </button>
                          );
                        })}
                      </div>
                    </td>
                    <td className="py-2.5 px-3">
                      <input
                        type="text"
                        value={row.dateNotes}
                        onChange={(e) => handleExamChange(index, 'dateNotes', e.target.value)}
                        placeholder="MM/DD/YYYY or Notes"
                        className="border border-slate-300 rounded px-2 py-1.5 w-full text-sm focus:ring-2 focus:ring-blue-500 outline-none min-w-[140px]"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* SPECIFY OTHER */}
      <section>
        <span className={sectionLabelClass}>SPECIFY OTHER</span>
        {!isEditMode ? (
          <p className="text-sm text-slate-800">{data.otherSpecify || 'None'}</p>
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
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
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
  const labelClass = 'text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 block';

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
        className="absolute z-10 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-xl py-3"
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
        <div className="max-h-48 overflow-y-auto">
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
          <label className={labelClass}>SIBLINGS</label>
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
          <label className={labelClass}>SPOUSE</label>
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
          <label className={labelClass}>OFFSPRING</label>
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

const LIFESTYLE_SECTION_HEADER = 'text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 block';
const LIFESTYLE_GRID_HEADER = 'text-[11px] font-bold uppercase tracking-wider text-slate-400';
const LIFESTYLE_VIEW_LABEL = 'text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 block';
const LIFESTYLE_INPUT =
  'border border-slate-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full';
const LIFESTYLE_GRID = 'grid gap-x-4 gap-y-4 items-center';
const LIFESTYLE_GRID_COLS = 'grid-cols-[1fr_2fr_1.5fr_2fr]';
const TOBACCO_STATUS_OPTIONS = ['Never Smoker', 'Current Smoker', 'Former Smoker'];

function LifestyleTab({
  data,
  isEditMode,
  onFieldChange,
  FieldLabel,
  FieldValue,
}) {
  const SegmentedToggle = ({ field, options }) => (
    <div className="flex w-full bg-slate-100 p-1 rounded-lg">
      {options.map((opt) => {
        const active = (data[field] || '') === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onFieldChange(field, opt)}
            className={`flex-1 py-1.5 text-sm rounded-md transition-all duration-200 font-medium ${
              active ? 'bg-white shadow-sm text-blue-500' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );

  const DateInput = ({ value, onChange, label }) => (
    <div className="flex flex-col gap-0.5 min-w-0">
      {label && <span className="text-[11px] text-slate-500 uppercase">{label}</span>}
      <div className="relative flex items-center">
        <Calendar className="absolute left-2.5 w-4 h-4 text-slate-400 pointer-events-none shrink-0" />
        <input
          type="date"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className={`${LIFESTYLE_INPUT} pl-9 min-w-0`}
        />
      </div>
    </div>
  );

  const DateRangeCell = ({ startValue, endValue, onStartChange, onEndChange, endLabel = 'End' }) => (
    <div className="flex gap-2 items-end flex-wrap min-w-0">
      <DateInput value={startValue} onChange={onStartChange} label="Start" />
      <DateInput value={endValue} onChange={onEndChange} label={endLabel} />
    </div>
  );

  return (
    <div className="space-y-6">
      {!isEditMode ? (
        /* View Mode: 2-column grid, no table headers */
        <>
          <section>
            <h3 className={LIFESTYLE_SECTION_HEADER}>SUBSTANCE USE HISTORY</h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <span className={LIFESTYLE_VIEW_LABEL}>TOBACCO</span>
                <FieldValue>
                  {[data.tobaccoStatus, data.tobaccoAmount].filter(Boolean).length
                    ? `${data.tobaccoStatus || ''}${data.tobaccoAmount ? ` - ${data.tobaccoAmount}` : ''}${data.tobaccoEnd ? ` (Ended ${data.tobaccoEnd})` : ''}`.trim() || '—'
                    : '—'}
                </FieldValue>
              </div>
              <div>
                <span className={LIFESTYLE_VIEW_LABEL}>ALCOHOL</span>
                <FieldValue>
                  {[data.alcoholStatus, data.alcoholDetails].filter(Boolean).length
                    ? `${data.alcoholStatus || ''}${data.alcoholDetails ? ` - ${data.alcoholDetails}` : ''}`.trim() || '—'
                    : '—'}
                </FieldValue>
              </div>
              <div>
                <span className={LIFESTYLE_VIEW_LABEL}>RECREATIONAL DRUGS</span>
                <FieldValue>
                  {[data.recreationalStatus, data.recreationalDetails].filter(Boolean).length
                    ? `${data.recreationalStatus || ''}${data.recreationalDetails ? ` - ${data.recreationalDetails}` : ''}`.trim() || '—'
                    : '—'}
                </FieldValue>
              </div>
              <div>
                <span className={LIFESTYLE_VIEW_LABEL}>COFFEE</span>
                <FieldValue>
                  {[data.coffeeStatus, data.coffeeDetails].filter(Boolean).length
                    ? `${data.coffeeStatus || ''}${data.coffeeDetails ? ` - ${data.coffeeDetails}` : ''}`.trim() || '—'
                    : '—'}
                </FieldValue>
              </div>
            </div>
          </section>
          <section>
            <h3 className={LIFESTYLE_SECTION_HEADER}>WELLNESS & BEHAVIORAL PATTERNS</h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <span className={LIFESTYLE_VIEW_LABEL}>COUNSELING</span>
                <FieldValue>
                  {[data.counselingStatus, data.counselingDetails].filter(Boolean).length
                    ? `${data.counselingStatus || ''}${data.counselingDetails ? ` - ${data.counselingDetails}` : ''}`.trim() || '—'
                    : '—'}
                </FieldValue>
              </div>
              <div>
                <span className={LIFESTYLE_VIEW_LABEL}>EXERCISE PATTERNS</span>
                <FieldValue>
                  {[data.exerciseStatus, data.exerciseDetails].filter(Boolean).length
                    ? `${data.exerciseStatus || ''}${data.exerciseDetails ? ` - ${data.exerciseDetails}` : ''}`.trim() || '—'
                    : '—'}
                </FieldValue>
              </div>
              <div>
                <span className={LIFESTYLE_VIEW_LABEL}>HAZARDOUS ACTIVITIES</span>
                <FieldValue>{data.hazardousStatus || '—'}</FieldValue>
              </div>
            </div>
          </section>
          <section>
            <h3 className={LIFESTYLE_SECTION_HEADER}>OTHER FACTORS</h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div className="col-span-2">
                <span className={LIFESTYLE_VIEW_LABEL}>SLEEP PATTERNS</span>
                <FieldValue>{data.sleepPatterns || '—'}</FieldValue>
              </div>
              <div className="col-span-2">
                <span className={LIFESTYLE_VIEW_LABEL}>SEATBELT USE</span>
                <FieldValue>{data.seatbeltUse || '—'}</FieldValue>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Edit Mode: 4-column grid unchanged */
        <>
          {/* Section 1: SUBSTANCE USE HISTORY */}
          <section>
            <h3 className={LIFESTYLE_SECTION_HEADER}>SUBSTANCE USE HISTORY</h3>
            <div className={`${LIFESTYLE_GRID} ${LIFESTYLE_GRID_COLS}`}>
              <div className={LIFESTYLE_GRID_HEADER}>SUBSTANCE</div>
              <div className={LIFESTYLE_GRID_HEADER}>DETAILS / FREQUENCY</div>
              <div className={LIFESTYLE_GRID_HEADER}>STATUS</div>
              <div className={LIFESTYLE_GRID_HEADER}>DATE RANGE</div>

              <div className="text-sm font-medium text-slate-700">Tobacco</div>
              <input
                type="text"
                value={data.tobaccoAmount ?? ''}
                onChange={(e) => onFieldChange('tobaccoAmount', e.target.value)}
                placeholder="1 pack/day"
                className={LIFESTYLE_INPUT}
              />
              <SegmentedToggle field="tobaccoStatus" options={TOBACCO_STATUS_OPTIONS} />
              <DateRangeCell
                startValue={data.tobaccoStart}
                endValue={data.tobaccoEnd}
                onStartChange={(v) => onFieldChange('tobaccoStart', v)}
                onEndChange={(v) => onFieldChange('tobaccoEnd', v)}
              />

              <div className="text-sm font-medium text-slate-700">Alcohol</div>
              <input
                type="text"
                value={data.alcoholDetails ?? ''}
                onChange={(e) => onFieldChange('alcoholDetails', e.target.value)}
                placeholder="Details..."
                className={LIFESTYLE_INPUT}
              />
              <SegmentedToggle field="alcoholStatus" options={['None', 'Current', 'Past']} />
              <DateRangeCell
                startValue={data.alcoholStart}
                endValue={data.alcoholEnd}
                onStartChange={(v) => onFieldChange('alcoholStart', v)}
                onEndChange={(v) => onFieldChange('alcoholEnd', v)}
              />

              <div className="text-sm font-medium text-slate-700">Recreational Drugs</div>
              <input
                type="text"
                value={data.recreationalDetails ?? ''}
                onChange={(e) => onFieldChange('recreationalDetails', e.target.value)}
                placeholder="Details..."
                className={LIFESTYLE_INPUT}
              />
              <SegmentedToggle field="recreationalStatus" options={['None', 'Current', 'Past']} />
              <DateRangeCell
                startValue={data.recreationalStart}
                endValue={data.recreationalEnd}
                onStartChange={(v) => onFieldChange('recreationalStart', v)}
                onEndChange={(v) => onFieldChange('recreationalEnd', v)}
              />

              <div className="text-sm font-medium text-slate-700">Coffee</div>
              <input
                type="text"
                value={data.coffeeDetails ?? ''}
                onChange={(e) => onFieldChange('coffeeDetails', e.target.value)}
                placeholder="e.g., 2 cups/morning"
                className={LIFESTYLE_INPUT}
              />
              <SegmentedToggle field="coffeeStatus" options={['None', 'Current', 'Past']} />
              <DateRangeCell
                startValue={data.coffeeStart}
                endValue={data.coffeeEnd}
                onStartChange={(v) => onFieldChange('coffeeStart', v)}
                onEndChange={(v) => onFieldChange('coffeeEnd', v)}
              />
            </div>
          </section>

          {/* Section 2: WELLNESS & BEHAVIORAL PATTERNS */}
          <section>
            <h3 className={LIFESTYLE_SECTION_HEADER}>WELLNESS & BEHAVIORAL PATTERNS</h3>
            <div className={`${LIFESTYLE_GRID} ${LIFESTYLE_GRID_COLS}`}>
              <div className={LIFESTYLE_GRID_HEADER}>ACTIVITY</div>
              <div className={LIFESTYLE_GRID_HEADER}>DESCRIPTION / NOTES</div>
              <div className={LIFESTYLE_GRID_HEADER}>STATUS</div>
              <div className={LIFESTYLE_GRID_HEADER}>DATE RANGE</div>

              <div className="text-sm font-medium text-slate-700">Counseling</div>
              <input
                type="text"
                value={data.counselingDetails ?? ''}
                onChange={(e) => onFieldChange('counselingDetails', e.target.value)}
                placeholder="e.g., Weekly therapy"
                className={LIFESTYLE_INPUT}
              />
              <SegmentedToggle field="counselingStatus" options={['N/A', 'Ongoing', 'Completed']} />
              <div className="flex gap-2 items-end flex-wrap min-w-0">
                <DateInput value={data.counselingStartDate} onChange={(v) => onFieldChange('counselingStartDate', v)} label="Start Date" />
              </div>

              <div className="text-sm font-medium text-slate-700">Exercise Patterns</div>
              <input
                type="text"
                value={data.exerciseDetails ?? ''}
                onChange={(e) => onFieldChange('exerciseDetails', e.target.value)}
                placeholder="Gym 3x/week"
                className={LIFESTYLE_INPUT}
              />
              <SegmentedToggle field="exerciseStatus" options={['Sedentary', 'Active', 'Athletic']} />
              <div className="flex gap-2 items-end flex-wrap min-w-0">
                <DateInput value={data.exerciseStartDate} onChange={(v) => onFieldChange('exerciseStartDate', v)} label="Start Date" />
              </div>

              <div className="text-sm font-medium text-slate-700">Hazardous Activities</div>
              <input
                type="text"
                value={data.hazardousDetails ?? ''}
                onChange={(e) => onFieldChange('hazardousDetails', e.target.value)}
                placeholder="Describe..."
                className={LIFESTYLE_INPUT}
              />
              <SegmentedToggle field="hazardousStatus" options={['No', 'Yes']} />
              <div className="flex gap-2 items-end flex-wrap min-w-0">
                <DateInput value={data.hazardousDate} onChange={(v) => onFieldChange('hazardousDate', v)} label="Date" />
              </div>
            </div>
          </section>

          {/* Section 3: OTHER FACTORS */}
          <section>
            <h3 className={LIFESTYLE_SECTION_HEADER}>OTHER FACTORS</h3>
            <div className={`${LIFESTYLE_GRID} ${LIFESTYLE_GRID_COLS} gap-y-4`}>
              <div className="text-sm font-medium text-slate-700 items-start pt-2">
                <FieldLabel>Sleep Patterns</FieldLabel>
              </div>
              <div className="col-span-3 min-w-0">
                <textarea
                  value={data.sleepPatterns ?? ''}
                  onChange={(e) => onFieldChange('sleepPatterns', e.target.value)}
                  placeholder="Describe typical sleep duration and quality..."
                  className={`${LIFESTYLE_INPUT} min-h-[80px] resize-y`}
                  rows={3}
                />
              </div>
              <div className="text-sm font-medium text-slate-700 items-start pt-2">
                <FieldLabel>Seatbelt Use</FieldLabel>
              </div>
              <div className="col-span-3 min-w-0">
                <input
                  type="text"
                  value={data.seatbeltUse ?? ''}
                  onChange={(e) => onFieldChange('seatbeltUse', e.target.value)}
                  placeholder="Always wears seatbelt"
                  className={LIFESTYLE_INPUT}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

const OTHER_TAB_LABEL = 'text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 block';
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
