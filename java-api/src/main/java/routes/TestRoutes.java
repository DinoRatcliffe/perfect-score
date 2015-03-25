package routes;

import javax.ws.rs.GET;
import javax.ws.rs.DELETE;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import domain.Test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.PreparedStatement;

@Path("/test")
public class TestRoutes {

    private static String createStatement = "INSERT INTO tests (_id) VALUES (?)";
    private static String addQuestionStatement = "INSERT INTO tests_questions (test, question) VALUES (?, ?)";
    private static String getQuestionsStatement = "SELECT question FROM tests_questions WHERE test=?";
    private static String removeQuestionStatement = "DELETE FROM tests_questions WHERE test=? AND question=?";
    private PreparedStatement getQuestions = null;
    private PreparedStatement createTest = null;
    private PreparedStatement addQuestion = null;
    private PreparedStatement removeQuestion = null;

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public String sayXMLJSON(@PathParam("id") String id) {
        String result = "[";
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/perfect_score","admin", "mypass");
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM tests");
            while (rs.next()) {
                result += "{\"_id\":\"" + rs.getString("_id") + "\"}";
                if (!rs.isLast()) {
                    result += ", ";
                }
            }
            conn.close();
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
        }
        result += "]";
        return result;
    }

    @DELETE
    @Path("/{id}/question/{questionId}")
    public void removeQuestion(@PathParam("id") String id, @PathParam("questionId") String questionId) {
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/perfect_score","admin", "mypass");
            removeQuestion = conn.prepareStatement(removeQuestionStatement);
            removeQuestion.setString(1, id);
            removeQuestion.setString(2, questionId);
            removeQuestion.execute();
            conn.close();
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
        }
    }

    @GET
    @Path("/{id}/questions")
    @Produces(MediaType.APPLICATION_JSON)
    public String getQuestions(@PathParam("id") String id) {
        String result = "[";
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/perfect_score","admin", "mypass");
            getQuestions = conn.prepareStatement(getQuestionsStatement);
            getQuestions.setString(1, id);
            ResultSet rs = getQuestions.executeQuery();
            while (rs.next()) {
                result += "\"" + rs.getString("question") + "\"";
                if (!rs.isLast()) {
                    result += ", ";
                }
            }
            conn.close();
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
        }
        result += "]";
        return result;
    }

    @PUT
    @Path("/{id}")
    @Produces("application/json")
    public String createTest(@PathParam("id") String id) {
        //TODO validate id
        String result = "{";
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/perfect_score","admin", "mypass");
            createTest = conn.prepareStatement(createStatement);
            createTest.setString(1, id);
            createTest.execute();
            result += "\"_id\":\"" + id + "\"";
            conn.close();
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
        }
        result += "}";
        return result;
    }

    @PUT
    @Path("/{id}/question/{questionId}")
    public void addQuestion(@PathParam("id") String id, @PathParam("questionId") String questionId) {
        try {
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost/perfect_score","admin", "mypass");
            addQuestion = conn.prepareStatement(addQuestionStatement);
            addQuestion.setString(1, id);
            addQuestion.setString(2, questionId);
            addQuestion.execute();
            conn.close();
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
        }
    }
}
