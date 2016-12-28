
import java.io.*;

public class flashcard implements Serializable {
	public String question;
	public String answer;

	public flashcard(String q, String a) {
		question = q;
		answer = a;
		// TODO Auto-generated constructor stub
	}

	public String getQuestion() {
		return question;
	}

	public String getAnswer() {
		// TODO Auto-generated method stub
		return answer;
	}

}
