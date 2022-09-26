const HV = {
  course: "EEE-4143",
  short: "HV",
  teachers: ["MMI/MNA"],
  room: 302,
  lab: false
};
const HVLab = {
  course: "EEE-4143",
  labC:"EEE-4144",
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
  course: "EEE-4165",
  labC:"EEE-4166",
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
  course: "EEE-4141",
  labC:"EEE-4142",
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
  course: "EEE-4163",
  labC:"EEE-4164",
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
  course: "EEE-4183",
  labC:"EEE-4184",
  short: "COM Lab",
  teachers: ["MZI"],
  room: "TeleCom Lab",
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
  course: "EEE-4107",
  labC:"EEE-4108",
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
  course: "EEE-4107",
  labC:"EEE-4108",
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
  course: "EEE-4117",
  labC:"EEE-4118",
  short: "R&TV Lab",
  teachers: ["MFM"],
  room: "TeleCom Lab",
  lab: true
};

const IPE = {
  course: "IPE-4111",
  short: "IPE",
  teachers: ["SA/MRI"],
  room: 302,
  lab: false
}
export const resultData = {
  a: [
    [[HV, HV, FAB], [aDSP, IPE, TV], [PSLab]],
    [[aDSPLab], [FAB, HV, PS], [FABLab]],
    [[TVLab], [VLSI, COM, PS], [COMLab]],
    [[COM, VLSI, VLSI], ["x", aDSP, IPE], [VLSILab]],
    [[PS, FAB, COM], [TV, TV, aDSP], [HVLab]]
  ],
  b: [
    [[HV, HV, FAB], [bDSPLab], [PSLab]],
    [[TV, TV, bDSP], [FAB, HV, PS], [FABLab]],
    [["x", bDSP, IPE], [VLSI, COM, PS], [COMLab]],
    [[COM, VLSI, VLSI], [TVLab], [VLSILab]],
    [[PS, FAB, COM], [bDSP, TV, IPE], [HVLab]]
  ]
};