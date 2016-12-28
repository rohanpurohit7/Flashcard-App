import java.util.*;
import java.awt.event.*;
import java.awt.*;
import java.io.*;

import javax.swing.JButton;
import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;
import javax.swing.ScrollPaneConstants;

public class flashcardbuilder {
	
	private JTextArea question;
	private JTextArea answer;
	private ArrayList<flashcard> cardSet;
	private JFrame frame;
	
	public static void main (String[] args){
		flashcardbuilder builder = new flashcardbuilder();
		builder.go();
	}

	public void go(){
		
		frame  = new JFrame("Flashcard review");
		JPanel mainPanel = new JPanel();
		Font bigFont = new Font("sanserif", Font.BOLD,24);
		question = new JTextArea(6,20);
		question.setLineWrap(true);
		question.setWrapStyleWord(true);
		question.setFont(bigFont);
		
		JScrollPane qScroller = new JScrollPane(question);
		qScroller.setVerticalScrollBarPolicy(ScrollPaneConstants.VERTICAL_SCROLLBAR_ALWAYS);
		qScroller.setHorizontalScrollBarPolicy(ScrollPaneConstants.HORIZONTAL_SCROLLBAR_NEVER);
		
		answer = new JTextArea(6,20);
		answer.setLineWrap(true);
		answer.setWrapStyleWord(true);
		answer.setFont(bigFont);
		
		JScrollPane aScroller = new JScrollPane(answer);
		aScroller.setVerticalScrollBarPolicy(ScrollPaneConstants.VERTICAL_SCROLLBAR_ALWAYS);
		aScroller.setHorizontalScrollBarPolicy(ScrollPaneConstants.HORIZONTAL_SCROLLBAR_NEVER);
		
		JButton nextButton = new JButton("Next Card");
		
		cardSet = new ArrayList<flashcard>();
		
		JLabel qLabel = new JLabel("Question");
		JLabel aLabel = new JLabel("Answer");
		
		mainPanel.add(qLabel);
		mainPanel.add(qScroller);
		mainPanel.add(aLabel);
		mainPanel.add(aScroller);
		mainPanel.add(nextButton);
		nextButton.addActionListener(new NextCardListener());
		JMenuBar menuBar = new JMenuBar();
		JMenu fileMenu = new JMenu("File");
		JMenuItem newMenuItem = new JMenuItem("New");
		JMenuItem saveMenuItem = new JMenuItem("Save");
		newMenuItem.addActionListener(new NewMenuListener());
		
		saveMenuItem.addActionListener(new SaveMenuListener());
		fileMenu.add(newMenuItem);
		fileMenu.add(saveMenuItem);
		menuBar.add(fileMenu);
		frame.setJMenuBar(menuBar);
		frame.getContentPane().add(BorderLayout.CENTER,mainPanel);
		frame.setSize(500,600);
		frame.setVisible(true);
	}
	public class NextCardListener implements ActionListener{
		public void actionPerformed(ActionEvent ev){
			flashcard card = new flashcard(question.getText(), answer.getText());
			cardSet.add(card);
			clearCard();
		}
	}
	public class SaveMenuListener implements ActionListener{
		public void actionPerformed(ActionEvent ev){
			flashcard card = new flashcard(question.getText(),answer.getText());
			cardSet.add(card);
			
			JFileChooser fileSave = new JFileChooser();
			fileSave.showSaveDialog(frame);
			saveFile(fileSave.getSelectedFile());
			
		}
	}
	public class NewMenuListener implements ActionListener{
		public void actionPerformed(ActionEvent ev){
			cardSet.clear();
			clearCard();
		}
	}
	private void clearCard(){
		question.setText("");
		answer.setText("");
		question.requestFocus();
	}
	private void saveFile(File file){
		try{
			BufferedWriter writer = new BufferedWriter(new FileWriter(file));
			
			for(flashcard card: cardSet){
				writer.write(card.getQuestion() +"/");
				writer.write(card.getAnswer() + "\n");
			}
			writer.close();
			}catch(IOException ex){
				System.out.println("error in deserializing... check for possible transients, version id voilations, class;var changes.");
				ex.printStackTrace();
			}
		
	}
}
