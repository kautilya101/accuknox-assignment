export const data = [
  {
    id: "cpsmExecutiveDashboard",
    name: "CPSM Executive Dashboard",
    widgets: [
      {
        id: "cloudAccounts",
        type: "CloudAccounts",
        visible: true,
        data: [
        {
          id:'connected',
          label: 'Connected',
          value: '2',
          color: '',
        },
        {
          id:'not connected',
          label: 'Not Connected',
          value: '2',
          color: ''
        }
      ],
      },
      {
        id: "cloudAccountRiskAssessment",
        type: "RiskAssessment",
        visible: true,
        data: [
          {
            id: "failed",
            label: "Failed",
            value: "1689",
            color: "",
          },
          {
            id: "warning",
            label: "Warning",
            value: "681",
            color: "",
          },
          {
            id: "notAvailable",
            label: "Not Available",
            value: "36",
            color: "",
          },
          {
            id: "passed",
            label: "Passed",
            value: "7253",
            color: "",
          },
        ],
      },
    ],
  },
  {
    id: "cwppdashboard",
    name: "CWPP Dashboard",
    widgets: [
      {
        id: "topNamespaceAlerts",
        type: "Top 5 Namespace Specific Alerts",
        visible: true,
        data: [],
      },
      { id: "workloadAlerts", 
        type: "Workload Alerts", 
        visible: true,
        data: []
      },
    ],
  },
  {
    id: "registryScan",
    name: "Registry Scan",
    widgets: [
      {
        id: "imageRiskAssessment",
        type: "ImageRiskAssessment",
        visible: true,
        data: [{ 
          Vulenrabilities: 'risks',
          critical: 9,
          criticalColor: '',
          high: 150,
          highColor: '',
          moderate: 700,
          moderateColor: '',
          low: 400,
          lowColor: '',
          informational: 20,
          informationalColor:''
        }],
      },
      {
        id: "imageSecurityIssues",
        type: "ImageSecurityIssues",
        visible: true,
        data: [{ 
          Vulenrabilities: 'issues',
          critical: 2,
          criticalColor: '',
          high: 2,
          highColor: '',
          moderate: 2,
          moderateColor: '',
          low: 1,
          lowColor: '',
          informational: 1,
          informationalColor:''
        }],
      },
    ],
  },
  
];
