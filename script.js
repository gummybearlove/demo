function makeCall(e) {
  e.preventDefault();
  window.open('tel:0422377552', '_self');
}

function sendEmail(e) {
  e.preventDefault();
  window.open('mailto:sue.arena@bytherules.com.au?subject=Partnership%20Enquiry', '_self');
}

function saveContact() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Sue Arena
N:Arena;Sue;;;
TITLE:Network Partnerships Manager
ORG:bytherules
TEL;TYPE=CELL:0422377552
EMAIL:sue.arena@bytherules.com.au
ADR;TYPE=POSTAL:;;GPO Box 2928;Brisbane;QLD;4001;Australia
URL:https://www.bytherules.com.au
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sue-arena.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
