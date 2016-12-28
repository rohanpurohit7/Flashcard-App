import java.util.*;
import java.awt.BorderLayout;
import java.awt.Font;
import java.awt.event.*;
import javax.swing.*;
import java.io.*;

public class flashcardplayer {
	private JTextArea display;
	private JTextArea answer;
	private ArrayList<flashcard> cardSet;
	private flashcard currentCard;
	private int currentCardIndex;
	private JFrame frame;
	private JButton nextButton;
	private boolean isShowAnswer;
	
	public static void main(String[]args){
		flashcardplayer reader = new flashcardplayer();
		reader.go();
	}
	public void go(){
		frame  = new JFrame("flashcard review app");
		JPanel mainPanel = new JPanel();
		Font bigFont = new Font("sanserif", Font.BOLD, 24);
		
		display = new JTextArea(10,20);
		display.setFont(bigFont);
		
		display.setLineWrap(true);
		display.setEditable(false);
		
		JScrollPane qScroller = new JScrollPane(display);
		qScroller.setVerticalScrollBarPolicy(ScrollPaneConstants.VERTICAL_SCROLLBAR_ALWAYS);
		qScroller.setHorizontalScrollBarPolicy(ScrollPaneConstants.HORIZONTAL_SCROLLBAR_NEVER);
		nextButton = new JButton("Show Question");
		mainPanel.add(qScroller);
		mainPanel.add(nextButton);
		nextButton.addActionListener(new NextCardListener());
		
		JMenuBar menuBar =  new JMenuBar();
		JMenu fileMenu = new JMenu("File");
		JMenuItem loadMenuItem = new JMenuItem("Load card set");
		loadMenuItem.addActionListener(new OpenMenuListener());
		fileMenu.add(loadMenuItem);
		menuBar.add(fileMenu);
		frame.setJMenuBar(menuBar);
		frame.getContentPane().add(BorderLayout.CENTER,mainPanel);
		frame.setSize(640,500);
		frame.setVisible(true);
	}
	public class NextCardListener implements ActionListener{
		public void actionPerformed(ActionEvent ev){
			if(isShowAnswer){
				display.setText(currentCard.getAnswer());
				nextButton.setText("Next Card");
				isShowAnswer = false;
			}else{
				if(currentCardIndex < cardSet.size()){
					showNextCard();
				} else{
					display.setText("That was the last card in the set");
					nextButton.setEnabled(false);
				}
			}
		}
	}
	public class OpenMenuListener implements ActionListener{
		public void actionPerformed(ActionEvent ev){
			JFileChooser fileOpen = new JFileChooser();
			fileOpen.showOpenDialog(frame);
			loadFile(fileOpen.getSelectedFile());
		}
	}
	private void loadFile(File file){
		cardSet = new ArrayList<flashcard>();
		try{
			BufferedReader reader =  new BufferedReader(new FileReader(file));
			String line = null;
			while((line = reader.readLine()) != null){
				makeCard(line);
			}
			reader.close();
		}catch(Exception ex){
			System.out.println("could not read the card file.");
			ex.printStackTrace();
		}
		showNextCard();
	}
	private void makeCard(String lineToParse){
		String[] result = lineToParse.split("/");
		flashcard card = new flashcard(result[0],result[1]);
		cardSet.add(card);
		System.out.println("card made");
	}
	private void showNextCard(){
		currentCard = cardSet.get(currentCardIndex);
		currentCardIndex++;
		display.setText(currentCard.getQuestion());
		nextButton.setText("Show Answer");
		isShowAnswer = true;
		
		
				}
			}
		
