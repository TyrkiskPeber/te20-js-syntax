// import javax.swing.*;

// public class pythagoras{
// 	public static void main (String[] arg) {
// 	double a = Double.parseDouble (JOptionPane.showInputDialog("F\u00F6rsta sidan i triangeln"));
// 	double b = Double.parseDouble (JOptionPane.showInputDialog("Andra sidan i triangeln"));
// 	double c = Math.sqrt(a*a + b*b);
// 	JOptionPane.showMessageDialog (null, "Hypotenusans l\u00E4ngd \u00E4r " + c);
// 	}
// }

// ni behöver 2 inmatningar och sedan en uträkning och en utskrift
const a = parseInt(prompt('Hur stor är katet A'));
const b = parseInt(prompt('Hur stor är katet B'));
const c = Math.sqrt(a*a + b*b);
window.alert("Hypotenusan är " + c);