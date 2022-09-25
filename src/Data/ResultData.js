const HV = {
  course: "EEE-4143",
  short: "HV",
  teachers: ["MMI/MNA"],
  room: 302,
  lab: false
};
const HVLab = {
  course: "EEE-4144",
  short: "HVLab",
  teachers: ["MMI"],
  room: "Measurement Lab",
  lab: true
};
const FAB = {
  course: "EEE-4165",
  short: "FAB",
  teachers: ["MFH/SK"],
  room: 302,
  lab: false
};
const FABLab = {
  course: "EEE-4166",
  short: "FAB Lab",
  teachers: ["MFH"],
  room: "NanoTech Lab",
  lab: true
};
const PS = {
  course: "EEE-4141",
  short: "PS",
  teachers: ["MMH/TSJ"],
  room: 302,
  lab: false
};
const PSLab = {
  course: "EEE-4142",
  short: "PS Lab",
  teachers: ["TSJ"],
  room: "IOT Lab",
  lab: true
};
const VLSI = {
  course: "EEE-4163",
  short: "VLSI",
  teachers: ["SMH/SHR"],
  room: 302,
  lab: false
};
const VLSILab = {
  course: "EEE-4164",
  short: "VLSI Lab",
  teachers: ["SMH"],
  room: "IOT Lab",
  lab: true
};
const COM = {
  course: "EEE-4183",
  short: "COM",
  teachers: ["MZI/SS"],
  room: 302,
  lab: false
};
const COMLab = {
  course: "EEE-4184",
  short: "COM Lab",
  teachers: ["MZI"],
  room: "Telecommunication Lab",
  lab: true
};


const aDSP = {
  course: "EEE-4107",
  short: "DSP",
  teachers: ["MSA"],
  room: 302,
  lab: false
};
const aDSPLab = {
  course: "EEE-4108",
  short: "DSP Lab",
  teachers: ["MAR"],
  room: "Computer Lab 2",
  lab: true
};
const bDSP = {
  course: "EEE-4107",
  short: "DSP",
  teachers: ["AM"],
  room: 302,
  lab: false
};
const bDSPLab = {
  course: "EEE-4108",
  short: "DSP Lab",
  teachers: ["AM"],
  room: "Computer Lab 2",
  lab: true
};
const TV = {
  course: "EEE-4117",
  short: "R&TV",
  teachers: ["JEG/MFM"],
  room: 302,
  lab: false
};
const TVLab = {
  course: "EEE-4118",
  short: "R&TV Lab",
  teachers: ["MFM"],
  room: "Telecommunication Lab",
  lab: true
};

const IPE = {
  course: "IPE-4111",
  short: "IPE",
  teachers: ["SA", "MRI"],
  room: 302,
  lab: false
}
export const resultData = {
  a: [
    {
      saturday:
      {
        part1: [HV, HV, FAB],
        part2: [aDSP, IPE, TV],
        part3: [PSLab]
      },
      sunday:
      {
        part1: [aDSPLab],
        part2: [FAB,HV,PS],
        part3: [FABLab]
      },
      monday:
      {
        part1: [TVLab],
        part2: [VLSI,COM,PS],
        part3: [COMLab]
      },
      tuesday:
      {
        part1: [COM,VLSI,VLSI],
        part2: ["x",aDSP,IPE],
        part3: [VLSILab]
      },
      wednesday:
      {
        part1: [PS,FAB,COM],
        part2: [TV,TV,aDSP],
        part3: [HVLab]
      },
    }
  ],
  b: [
    {
      saturday:
      {
        part1: [HV, HV, FAB],
        part2: [bDSPLab],
        part3: [PSLab]
      },
      sunday:
      {
        part1: [TV,TV,bDSP],
        part2: [FAB,HV,PS],
        part3: [FABLab]
      },
      monday:
      {
        part1: ["x",bDSP,IPE],
        part2: [VLSI,COM,PS],
        part3: [COMLab]
      },
      tuesday:
      {
        part1: [COM,VLSI,VLSI],
        part2: [TVLab],
        part3: [VLSILab]
      },
      wednesday:
      {
        part1: [PS,FAB,COM],
        part2: [bDSP,TV,IPE],
        part3: [HVLab]
      },
    }
  ]
};