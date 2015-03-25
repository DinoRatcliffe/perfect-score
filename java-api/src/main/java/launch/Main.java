package launch;

import java.io.File;
import org.apache.catalina.startup.Tomcat;
import org.apache.catalina.Context;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.servlet.ServletContainer;

public class Main {

    public static final int TOMCAT_PORT = 9090;

    public static void main(String[] args) throws Exception {
        try {
            // The newInstance() call is a work around for some
            // broken Java implementations

            Class.forName("com.mysql.jdbc.Driver").newInstance();
        } catch (Exception ex) {
            // handle the error
        }

        Tomcat tomcat = new Tomcat();
        tomcat.setPort(TOMCAT_PORT);
        Context context = tomcat.addContext("/", new File(".").getAbsolutePath());
        ResourceConfig config = new ResourceConfig();
        config.packages("routes");
        config.register(JacksonFeature.class); 
        // config.register(ResponseCorsFilter.class); 
        Tomcat.addServlet(context, "jersey", new ServletContainer(config));
        context.addServletMapping("/rs/*", "jersey");
        tomcat.start();
        tomcat.getServer().await();
    }
}
