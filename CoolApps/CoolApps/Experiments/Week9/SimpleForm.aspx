<%@ Page Language="C#" ValidateRequest="false" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>My very simple Form</title>
    <link type="text/css" rel="stylesheet" href="../../css/Week9/myServerPage.css" />

    <script runat="server">
        protected void displayText(object sender, EventArgs e)
        {
            double Num;
            bool isNum = double.TryParse(age.Text, out Num);
            if (isNum)
            {


                if (int.Parse(age.Text) > 0 && int.Parse(age.Text) <= 12)
                {

                    result.Text = "Hello " + Server.HtmlEncode(name.Text) + ", you are a kido!";

                }
                else if (int.Parse(age.Text) > 12 && int.Parse(age.Text) <= 19)
                {

                    result.Text = "Hello " + Server.HtmlEncode(name.Text) + ", you are a teen ager!";
                }
                else if (int.Parse(age.Text) > 19 && int.Parse(age.Text) <= 40)
                {
                    result.Text = "Hello " + Server.HtmlEncode(name.Text) + ", you are a youngster!!";
                }
                else if (int.Parse(age.Text) > 40 && int.Parse(age.Text)<=110)
                {

                    result.Text = "Hello " + Server.HtmlEncode(name.Text) + ", you are an old chap!";
                }
                else
                {
                    result.Text = "Hello " + Server.HtmlEncode(name.Text) + ", your age is wrong!!";

                }
            }
            else
            {

                result.Text = "Hello " + Server.HtmlEncode(name.Text) + ", your age is wrong!!";
            }


        }
    </script>

</head>
<body>
    <header>
        <h2> How old are you?? Server Side Scripting Experiment</h2>
    </header>

        <div class="mydivision">
            <div class="div-header"> About the experiment </div>
            <p>
                This experiment is to study ASP DOT Net Server Side scripting. In this experiment, I have created
                a simple application where the user can enter a name and a <b>valid </b> age. By valid I mean it can be 
                between 1 and 110. Name may or may not be entered. But I have html encoded the name.This app simply 
                provides a message based on the age that it gets from input.
                <br />
                This is my very first app using server side scripting!
                 
            </p>
        </div>
        <div class="mydivision">
            <div class="div-header">
                Code snippet
            </div>
              if (int.Parse(age.Text) &gt; 0 &amp;&amp; int.Parse(age.Text) &lt;= 12) <br />
                { <br />

                    result.Text = &quot;Hello &quot; + Server.HtmlEncode(name.Text) + &quot;, you are a kido!&quot;; <br />

                }<br />
        </div><br />

        <div class="mydivision">
            <div class="div-header">
                Implementation
            </div>
            
            <form id="mysimpleForm" class="simpleForm" runat="server">
            <div class="myform">
                Name:
                <asp:TextBox ID="name" runat="server" type="text" placeholder="Enter Name"></asp:TextBox>
                <br />
                Age: &nbsp;<asp:TextBox ID="age" type="number" runat="server" placeholder="Enter Age"></asp:TextBox>
                <br />
                <asp:Button type="submit" runat="server" Value="Submit" Text="Submit" OnClick="displayText" />
                <br />
                <asp:Label ID="result" class="mySubmitButton" runat="server"></asp:Label>
            </div>
            </form>
        </div>
         <div class="mydivision">
            <div class="div-header">
                Source Code
            </div>
            <a href="../../fileview/Default.aspx?~/css/Week9/myServerPage.css"
               target="_blank">CSS Source code</a><br />
            <a href="../../fileview/Default.aspx?~/Experiments/Week9/SimpleForm.aspx"
               target="_blank">HTML Source code</a><br />

        </div>
        <div class="mydivision">
            <div class="div-header">
                Link to references
            </div>
            <a href="http://net4.ccs.neu.edu/home/rasala/fileview/Default.aspx?~/experiments/basic/CopyUserInput2.aspx" target="_blank"> Professor Rasala's Material Online</a>
        </div>


</body>
</html>
