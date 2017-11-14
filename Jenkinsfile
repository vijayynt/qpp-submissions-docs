node('default') {
  checkout scm
  stage('SonarQube analysis') {
    // requires SonarQube Scanner 2.8+
    def scannerHome = tool 'sonarqube';
    withSonarQubeEnv('sonarcloud') {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}