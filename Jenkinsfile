node('default') {
  checkout scm
  stage('SonarQube analysis') {
    // requires SonarQube Scanner 2.8+
    def scannerHome = tool 'SonarQube Scanner 3.0.3.778';
    withSonarQubeEnv('sonarqube') {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}